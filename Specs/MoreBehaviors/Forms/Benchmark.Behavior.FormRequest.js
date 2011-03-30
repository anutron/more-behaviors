(function(){

	var str = '<form data-filters="FormRequest" data-update-by-selector=".formRequestTest"></form><div id="formRequestTest"></div>';
	MooBench.addBehaviorTest('FormRequest (by selector)', str);
	MooBench.addMultipleBehaviorTest('FormRequest (by selector) x10', str, 10);

})();