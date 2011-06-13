/*
---
description: Creates instances of HtmlTable for tables with the HtmlTable filter
provides: [Behavior.HtmlTable]
requires: [Behavior/Behavior, More/HtmlTable.Sort, More/HtmlTable.Zebra, More/HtmlTable.Select, More/HtmlTable.Tree, More/HtmlTable.Resize, More/Object.Extras]
script: Behavior.HtmlTable.js
name: Behavior.HtmlTable
...
*/

/*
	Refactor HtmlTable.Sort functionality:
	don't detect the parsers on startup
	wait for click
	unless the option says to sort on startup
*/

HtmlTable = Class.refactor(HtmlTable, {
	detectParsers: function(){
		//if we are parsing on startup, then set ready to true
		if (this.options.sortOnStartup) this._readyToParse = true;
		//otherwise, don't parse until ready
		if (this._readyToParse) {
			this._parsed = true;
			return this.previous();
		}
	},
	headClick: function(event, el){
		//on click, if we haven't parsed, set ready to true and run the parser
		if (!this._parsed) {
			this._readyToParse = true;
			this.setParsers();
		}
		this.previous(event, el);
	},
	sort: function(index, reverse, pre){
		//don't sort if we haven't parsed; this prevents sorting on startup
		if (this._parsed) return this.previous(index, reverse, pre);
	}
});


Behavior.addGlobalFilter('HtmlTable', {

	deprecatedAsJSON: {
		resize: 'table-resize'
	},

	defaults: {
		classNoSort: 'noSort'
	},

	setup: function(element, api){
		//make all data tables sortable
		var firstSort;
		element.getElements('thead th').each(function(th, i){
			if (firstSort == null && !th.hasClass('noSort')) firstSort = i;
			if (th.hasClass('defaultSort')) firstSort = i;
		});
		api.setDefault('firstSort', firstSort);
		var multiselectable = api.getAs(Boolean, 'multiselect', element.hasClass('multiselect'));
		var table = new HtmlTable(element,
			Object.cleanValues({
				parsers: api.getAs(Array, 'parsers'),
				sortOnStartup: api.getAs(Boolean, 'sortOnStartup'),
				sortIndex: api.getAs(Number, 'firstSort'),
				sortable: api.getAs(Boolean, 'sortable', /* deprecated default: */ element.hasClass('sortable') && !element.hasClass('treeview')),
				classNoSort: api.get('noSort'),
				selectable: api.getAs(Boolean, 'selectable', /* deprecated default: */ element.hasClass('selectable') || multiselectable),
				allowMultiSelect: multiselectable,
				useKeyboard: api.getAs(Boolean, 'useKeybaord', /* deprecated default: */ !element.hasClass('noKeyboard')),
				enableTree: api.getAs(Boolean, 'enableTree', /* deprecated default: */ element.hasClass('treeView')),
				resizable: api.getAs(Boolean, 'resizable', /* deprecated default: */ element.hasClass('resizable')),
				resize: api.getAs(Boolean, 'resize'),
				build: api.getAs(Boolean, 'build', /* deprecated default: */ element.hasClass('buildTree'))
			})
		);
		api.onCleanup(function(){
			if (table.keyboard) table.keyboard.relinquish();
		});
		// Hack to make tables not jump around in Chrome.
		if (Browser.Engine.webkit) {
			var width = element.style.width;
			element.setStyle('width', '99%');
			(function() {
				element.style.width = width;
			}).delay(1);
		}
		return table;
	}

});

HtmlTable.defineParsers({
	//A parser to allow numeric sorting by any value.
	dataSortNumeric: {
		match: /data-sort-numeric/,
		convert: function() {
			return this.getElement('[data-sort-numeric]').getData('sort-numeric').toInt();
		},
		number: true
	},
	//A parser to allow lexicographical sorting by any string.
	dataSortString: {
		match: /data-sort-string/,
		convert: function() {
			return this.getElement('[data-sort-string]').getData('sort-string');
		},
		number: false 
	}
});