/*
---
description: Provides methods to set or toggle properties on target elements.
provides: [Delegator.setProperty, eraseProperty, toggleProperty]
requires: [Behavior/Delegator, Core/Element]
script: Delegator.SetProperty.js
name: Delegator.SetProperty

...
*/
(function(){
	var triggers = {};

	['set', 'erase', 'toggle'].each(function(action){

		triggers[action + 'Property'] = {
			require: ['property'],
			handler: function(event, link, api){
				var target = link;
				if (api.get('target') && api.get('target') != 'self') {
					target = link.getElement(api.get('target'));
					if (!target) api.fail('could not locate target element to ' + action + ' its property', link);
				}
				if (action == 'set' || (action == 'toggle' && target.get(api.get('property')) !== null && target.get(api.get('property')).toString() != api.get('value'))){
					if (api.get('value') === null) api.fail('Could not retrieve eraseproperty-value option from element.');
					target.set(api.get('property'), api.get('value'));
				} else {
					target.erase(api.get('property'));
				}
			}
		};

	});

	Delegator.register('click', triggers);

})();