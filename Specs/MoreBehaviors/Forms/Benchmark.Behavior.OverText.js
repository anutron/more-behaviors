(function(){

	var str = '<input data-filters="OverText" title="test"/>';
	MooBench.addBehaviorTest('OverText', str);
	MooBench.addMultipleBehaviorTest('OverText x10', str, 10);

})();