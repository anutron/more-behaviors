/*
---
description: Creates instances of HtmlTable for tables with the HtmlTable filter
provides: [Behavior.HtmlTable]
requires: [Behavior/Behavior, More/HtmlTable.Sort, More/HtmlTable.Zebra, More/HtmlTable.Select, More/HtmlTable.Tree, More/HtmlTable.Resize]
script: Behavior.HtmlTable.js
...
*/

Behavior.addGlobalFilters({

	HtmlTable: function(element){
		//make all data tables sortable
		var firstSort;
		element.getElements('thead th').each(function(th, i){
			if (firstSort == null && !th.hasClass('noSort')) firstSort = i;
			if (th.hasClass('defaultSort')) firstSort = i;
		});
		var multiselectable = element.hasClass('multiselect');
		var table = new HtmlTable(element, {
			sortIndex: firstSort,
			sortable: element.hasClass('sortable') && !element.hasClass('treeview'),
			classNoSort: 'noSort',
			selectable: element.hasClass('selectable') || multiselectable,
			allowMultiSelect: multiselectable,
			useKeyboard: !element.hasClass('noKeyboard'),
			enableTree: element.hasClass('treeView'),
			resizable: element.hasClass('resizable'),
			resize: element.getData('table-resize'),
			build: element.hasClass('buildTree')
		});
		this.markForCleanup(element, function(){
			if (table.keyboard) table.keyboard.relinquish();
		});
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