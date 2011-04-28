/*
---
description: Makes form elements with a FormRequest data filter automatically update via Ajax.
provides: [Behavior.FormRequest]
requires: [Behavior/Behavior, More/Form.Request, Behavior/Element.Data]
script: Behavior.FormRequest.js
...
*/

Behavior.addGlobalFilter('FormRequest', {
	//deprecated options
	deprecated: {
		'update': 'update',
		'update-by-id': 'update-by-id',
		'update-by-selector': 'update-by-selector',
		'filter': 'update-filter'
	},
	defaults: {
		resetForm: true
	},
	setup: function(element, api){
		var updateElement,
		    update = api.get('update');
		if (update == "parent") {
			updateElement = element.getParent();
		} else if (update =="self") {
			updateElement = element;
		//these are deprecated
			} else if (api.get('update-by-id')){
				updateElement = document.id(api.get('update-by-id'));
			} else if (api.get('update-by-selector')){
				updateElement = document.id(api.getContentElement()).getElement(api.get('update-by-selector'));
		// end deprecated
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
