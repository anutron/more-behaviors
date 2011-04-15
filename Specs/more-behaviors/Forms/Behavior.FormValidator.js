(function(){

	var str = '<form data-filters="FormValidator"></form>';
	Behavior.addFilterTest({
		filterName: 'FormValidator',
		desc: 'Creates an instance of FormValidator',
		content: str,
		returns: Form.Validator
	});
	Behavior.addFilterTest({
		filterName: 'FormValidator',
		desc: 'Creates an instance of FormValidator (10x)',
		content: str,
		returns: Form.Validator,
		multiplier: 10,
		noSpecs: true
	});

})();