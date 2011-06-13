/*
---
description: Makes form elements with a FormRequest data filter automatically update via Ajax.
provides: [Behavior.FormRequest]
requires: [Behavior/Behavior, More/Form.Request, Behavior/Element.Data]
script: Behavior.FormRequest.js
name: Behavior.FormRequest
...
*/

Behavior.addGlobalFilter('FormRequest', {
	defaults: {
		resetForm: true
	},
	setup: function(element, api){
		var updateElement,
		    update = api.get('update');
		if (update =="self") {
			updateElement = element;
		} else {
			updateElement = element.getElement(update);
		}

		if (!updateElement) api.fail('Could not find target element for form update');

		//pass null for the update element argument; JFrame does our updating for us
		var req = new Form.Request(element, updateElement, {
			requestOptions: {
				filter: api.get('filter'),
				spinnerTarget: updateElement
			},
			resetForm: api.get('resetForm') || /* noReset is deprecated: */ !element.hasClass('noReset')
		});
		api.onCleanup(req.detach.bind(req));
		return req;
	}

});
