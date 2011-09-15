/*
---
description: Provides methods to reveal, dissolve, nix, and toggle using Fx.Reveal.
provides: [Delegator.Reveal, Delegator.ToggleReveal, Delegator.Dissolve, Delegator.Nix]
requires: [Behavior/Delegator, More/Fx.Reveal]
script: Delegator.FxReveal.js
name: Delegator.FxReveal

...
*/
(function(){

	var triggers = {};

	['reveal', 'toggleReveal', 'dissolve', 'nix'].each(function(action){

		triggers[action] = {
			handler: function(event, link, api){
				var target = link;
				if (api.get('target')) {
					target = link.getElement(api.get('target'));
					if (!target) api.fail('could not locate target element to ' + action, link);
				}

				var fxOptions = api.get('fxOptions');
				if (fxOptions) target.set('reveal', fxOptions);
				target.get('reveal');
				if (action == 'toggleReveal') target.get('reveal').toggle();
				else target[action]();
			}
		};

	});

	Delegator.register('click', triggers);

})();