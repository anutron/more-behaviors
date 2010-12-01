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
	FormValidator: function(element, methods) {
		//instantiate the form validator
		var validator = element.retrieve('validator');
		if (!validator) {
			validator = new Form.Validator.Inline(element, {
				useTitles: true
			});
		}
		validator.setOptions({
			onShow: function(input, advice, className) {
				//scroll to errors within the jframe
				/*JFrame Reference */
				this.jframe.scroller.toElement(input);
			}.bind(this),
			//not the window
			scrollToErrorsOnSubmit: false
		});
	}

});