/*
---
name: Behavior.FormValidator Tests
description: n/a
requires: [More-Behaviors/Behavior.FormValidator, Behavior-Tests/Behavior.SpecsHelpers]
provides: [Behavior.FormValidator.Tests]
...
*/
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