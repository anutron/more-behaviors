/*
---
description: Adds an instance of Form.Validator.Inline to any form with the class .form-validator.
provides: [Behavior.FormValidator]
requires: [Behavior/Behavior, More/Form.Validator.Inline]
script: Behavior.FormValidator.js

...
*/

Behavior.addGlobalFilters({

	//validates any form with the .form-validator class
	FormValidator: function(element, api) {
		//instantiate the form validator
		var validator = element.retrieve('validator');
		if (!validator) {
			validator = new Form.Validator.Inline(element, {
				useTitles: true
			});
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
		return validator;
	}

});