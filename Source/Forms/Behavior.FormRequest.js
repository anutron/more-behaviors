/*
---
description: Makes form elements with a FormRequest data filter automatically update via Ajax.
provides: [Behavior.FormRequest]
requires: [Behavior/Behavior, More/Form.Request, Behavior/Element.Data]
script: Behavior.FormRequest.js
...
*/

Behavior.addGlobalFilters({

	FormRequest: function(element){
		var updateElement,
		    update = element.getData('update');
		if (update == "parent") {
			updateElement = element.getParent();
		} else if (update =="self") {
			updateElement = element;
		} else if (element.getData('update-by-id')){
			updateElement = document.id(element.getData('update-by-id'));
		} else if (element.getData('update-by-selector')){
			updateElement = document.id(document.body).getElement(element.getData('update-by-selector'));
		}
		//pass null for the update element argument; JFrame does our updating for us
		var req = new Form.Request(element, updateElement || element, {
			requestOptions: {
				spinnerTarget: updateElement
			},
			resetForm: !element.hasClass('noReset')
		});
		this.markForCleanup(element, function(){
			req.detach();
		});
	}

});
