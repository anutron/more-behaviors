/*
---
description: Creates instances of Sortable for sortable lists, optionally updating an input or element with the sort state.
provides: [Behavior.Sortable]
requires: [Behavior/Behavior, More/Sortables, More/Scroller]
script: Behavior.Sortable.js
name: Behavior.Sortable
...
*/
(function(){

Behavior.addGlobalFilter('Sortable',  {

	defaults: {
		clone: true,
		opacity: 0.6
	},
	deprecated: {
		lists: 'sort-lists',
		state: 'sort-state',
		property: 'sort-property',
		'property-child': 'property-child'
	},
	setup: function(element, api){
		//get the list selector
		var lists = api.get('lists');
		//if present, get the elements
		if (lists) lists = element.getElements(lists);
		//else the target element is the list
		else lists = element;
		//get the state target; this is the element (typically an input) to put the new state value on change
		var target = api.get('state');
		if (target) target = element.getParent().getElement(target);

		//get the property to read from each sorted element
		var property = api.get('property');
		//if the value is on a child element, a selector is specified to find it (see docs)
		var property_child = api.get('property-child');
	
		var scrollParent;
		var sort = new Sortables(lists, {
			clone: api.getAs(Boolean, 'clone'),
			opacity: api.getAs(Number, 'opacity'),
			onStart: function(element, clone){
				clone.addClass('clone');
				var scroller,
				    scrollElement = isScrollable(element) ? element : getScrollParent(element);
				if (scrollElement && scrollElement != scrollParent) {
					scroller = new Scroller(scrollElement);
					scrollElement.store('behavior:scroller', scroller);
					scrollParent = scrollElement;
				} else {
					if (scrollParent) scroller = scrollParent.retrieve('behavior:scroller');
				}
				if (scroller) scroller.attach();
			},
			onComplete: function(){
				if (target) {
					target.set(target.get('tag') == 'input' ? 'value' : 'html', sort.serialize(function(item){
						if (property_child) item = item.getElement(property_child);
						var isInput = ['input', 'textarea', 'select'].contains(item.get('tag'));
						return item.get(property || 'name') || isInput ? item.get('value') : item.get('id');
					}).join(','));
				}
				if (scrollParent) scrollParent.retrieve('behavior:scroller').detach();
			}
		});
		api.onCleanup(sort.detach.bind(sort));
		return sort;
	}

});

var isBody = function(element){
	return (/^(?:body|html)$/i).test(element.tagName);
};

var isScrollable = function(element){
	return ['scroll', 'auto'].contains(element.getStyle('overflow'));
};

var getScrollParent = function(element){
	var scrollParent,
	    parent = element.getParent();
	while (!scrollParent){
		if (isBody(parent) || isScrollable(parent)){
			scrollParent = parent;
		} else {
			parent = parent.getParent();
		}
	}
	return scrollParent;
};

})();