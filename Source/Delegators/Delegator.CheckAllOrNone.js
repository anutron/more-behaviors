/*
---
description: Checks all or none of a group of checkboxes.
provides: [Delegator.CheckAllOrNone]
requires: [Behavior/Delegator]
script: Delegator.CheckAllOrNone.js
name: Delegator.CheckAllOrNone

...
*/

Delegator.register('click', {

	'checkAll': {
		require: ['targets'],
		handler: function(event, link, api){
			var targets = link.getElements(api.get('targets'));
			if (targets.length) targets.set('checked', true);
			else api.warn('There were no inputs found to check.');
		}
	},

	'checkNone': {
		require: ['targets'],
		handler: function(event, link, api){
			var targets = link.getElements(api.get('targets'));
			if (targets.length) targets.set('checked', false);
			else api.warn('There were no inputs found to uncheck.');
		}
	}

});