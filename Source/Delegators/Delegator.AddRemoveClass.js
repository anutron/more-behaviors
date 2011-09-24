/*
---
description: Provides methods to add/remove/toggle a class on a given target.
provides: [Delegator.ToggleClass, Delegator.AddClass, Delegator.RemoveClass, Delegator.AddRemoveClass]
requires: [Behavior/Delegator, Core/Element]
script: Delegator.AddRemoveClass.js
name: Delegator.AddRemoveClass

...
*/
(function(){

	var triggers = {};

	['add', 'remove', 'toggle'].each(function(action){

		triggers[action + 'Class'] = {
			require: ['class'],
			handler: function(event, link, api){
				var target = link;
				if (api.get('target')) {
					target = link.getElement(api.get('target'));
					if (!target) api.fail('could not locate target element to ' + action + ' its class', link);
				}
				target[action + 'Class'](api.get('class'));
			}
		};

	});

	Delegator.register('click', triggers);

})();