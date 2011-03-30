(function(){

	var header = '<table data-filters="HtmlTable" class="multiselect selectable sortable resizable" data-table-resize="table" cellpadding="0" cellspacing="0"><thead><tr><th>ID</th><th>TimeZone</th><th>Name</th><th>GEO Latitude</th><th>GEO Longitude</th></tr></thead><tbody>';
	var str = '<tr><td>22</td><td>New York City</td><td>America/New_York</td><td>40.7255</td><td>-73.9983</td></tr>';
	var footer = '</tbody></table>';
	var build = function(str, times) {
		var result = '';
		times.times(function(){
			result += str;
		});
		return result;
	};
	MooBench.addBehaviorTest('HtmlTable (400 rows / 5 col); multiselect sortable resizable', header + build(str, 400) + footer);
	MooBench.addBehaviorTest('HtmlTable (1000 rows / 5 col); multiselect sortable resizable', header + build(str, 1000) + footer);

	var treeTable = '<table id="tree2" data-filters="HtmlTable" class="selectable treeView multiselect">';
	var treeHead = '<thead><th>Name</th><th>Date Modified</th><th>Size</th></thead><tbody>';
	var treeRows = '<tr class="table-folder table-depth-0" id="docs2"><td><a class="expand"></a>Documents</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-depth-1"><td>Resume.pdf</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-depth-1"><td>notes.txt</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-folder table-depth-1"><td><a class="expand"></a>Receipts</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-depth-2"><td>starbucks.txt</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-depth-2"><td>safeway.txt</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-depth-2"><td>movies.txt</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-folder table-depth-2"><td><a class="expand"></a>Taxes</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-depth-3"><td>2008 Taxes.pdf</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-depth-3"><td>2009 Taxes.pdf</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-depth-3"><td>2010 Taxes.pdf</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-folder table-depth-2"><td><a class="expand"></a>Pictures</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-depth-3"><td>Baby.jpg</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="hidden table-depth-2"><td>Bar.txt</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr><tr class="table-depth-0"><td>Foo.txt</td><td>Jul 10, 2010 1:39pm</td><td>--</td></tr>';

	MooBench.addBehaviorTest('HtmlTable: Treeview (300 rows / 3 col); tree selectable NO BUILD', treeTable + treeHead + build(treeRows, 20) + footer);
	MooBench.addBehaviorTest('HtmlTable: Treeview (600 rows / 3 col); tree selectable NO BUILD', treeTable + treeHead + build(treeRows, 40) + footer);

	var treeTableBuild = '<table id="tree2" data-filters="HtmlTable" class="selectable treeView multiselect buildTree">';
	MooBench.addBehaviorTest('HtmlTable: Treeview (300 rows / 3 col); tree selectable BUILD', treeTableBuild + treeHead + build(treeRows, 20) + footer);
	MooBench.addBehaviorTest('HtmlTable: Treeview (600 rows / 3 col); tree selectable BUILD', treeTableBuild + treeHead + build(treeRows, 40) + footer);

})();