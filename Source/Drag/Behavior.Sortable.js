/*
---
description: Creates instances of Sortable for sortable lists, optionally updating an input or element with the sort state.
provides: [Behavior.Sortable]
requires: [Behavior/Behavior, More/Sortables, More/Scroller]
script: Behavior.HtmlTable.js
...
*/
(function(){

Behavior.addGlobalFilters({

	Sortable: function(element){
		var lists = element.getData('sort-lists');
		if (lists) lists = element.getElements(lists);
		else lists = element;
		var target = element.getData('sort-state');
		if (target) target = element.getParent().getElement(target);
		
		var property = element.getData('sort-property');
		var property_child = element.getData('sort-property-child');
		
		var scrollParent;
		var sort = new Sortables(lists, {
			clone: true,
			opacity: 0.6,
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
		this.markForCleanup(element, function(){
			sort.detach();
		});
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