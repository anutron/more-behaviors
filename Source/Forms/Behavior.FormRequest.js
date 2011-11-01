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
		    update = api.get('update'),
		    spinner = api.get('spinner');
		if (update =="self") updateElement = element;
		else updateElement = element.getElement(update);

		if (spinner == "self") spinner = element;
		else if (spinner) spinner = element.getElement(spinner);
		else spinner = updateElement;

		if (!updateElement) api.fail('Could not find target element for form update');

		var req = new Form.Request(element, updateElement, {
			requestOptions: {
				filter: api.get('filter'),
				spinnerTarget: spinner
			},
			resetForm: api.get('resetForm') || /* noReset is deprecated: */ !element.hasClass('noReset')
		}).addEvent('complete', function(){
			api.applyFilters(updateElement);
		});
		api.onCleanup(req.detach.bind(req));
		return req;
	}

});
