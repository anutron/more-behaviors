/*
---
description: Adds an instance of Form.Validator.Inline to any form with the class .form-validator.
provides: [Behavior.FormValidator]
requires: [Behavior/Behavior, More/Form.Validator.Inline, More/Object.Extras]
script: Behavior.FormValidator.js
name: Behavior.FormValidator
...
*/

Behavior.addGlobalFilter('FormValidator', {
	defaults: {
		useTitles: true,
		scrollToErrorsOnSubmit: true,
		scrollToErrorsOnBlur: false,
		scrollToErrorsOnChange: false,
		ignoreHidden: true,
		ignoreDisabled: true,
		useTitles: false,
		evaluateOnSubmit: true,
		evaluateFieldsOnBlur: true,
		evaluateFieldsOnChange: true,
		serial: true,
		stopOnFailure: true
	},
	setup: function(element, api) {
		//instantiate the form validator
		var validator = element.retrieve('validator');
		if (!validator) {
			validator = new Form.Validator.Inline(element,
				Object.cleanValues(
					api.getAs({
						useTitles: Boolean,
						scrollToErrorsOnSubmit: Boolean,
						scrollToErrorsOnBlur: Boolean,
						scrollToErrorsOnChange: Boolean,
						ignoreHidden: Boolean,
						ignoreDisabled: Boolean,
						useTitles: Boolean,
						evaluateOnSubmit: Boolean,
						evaluateFieldsOnBlur: Boolean,
						evaluateFieldsOnChange: Boolean,
						serial: Boolean,
						stopOnFailure: Boolean
					})
				)
			);
		}
		//if the api provides a getScroller method, which should return an instance of
		//Fx.Scroll, use it instead
		if (api.getScroller) {
			validator.setOptions({
				onShow: function(input, advice, className) {
					api.getScroller().toElement(input);
				},
				scrollToErrorsOnSubmit: false
			});
		}
		api.onCleanup(function(){
			validator.stop();
		});
		return validator;
	}

});