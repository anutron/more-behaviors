/*
---
description: Provides methods to reveal, dissolve, nix, and toggle using Fx.Reveal.
provides: [Delegator.FxReveal, Delegator.Reveal, Delegator.ToggleReveal, Delegator.Dissolve, Delegator.Nix]
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
				var targets;
				if (api.get('target')){
					targets = new Elements([link.getElement(api.get('target'))]);
					if (!targets) api.fail('could not locate target element to ' + action, link);
				} else if (api.get('targets')){
					targets = link.getElements(api.get('targets'));
					if (!targets.length) api.fail('could not locate target elements to ' + action, link);
				} else {
					targets = new Elements([link]);
				}

				var fxOptions = api.get('fxOptions');
				if (fxOptions) targets.set('reveal', fxOptions);
				targets.get('reveal');
				if (action == 'toggleReveal') targets.get('reveal').invoke('toggle');
				else targets[action]();
				if (!api.getAs(Boolean, 'allowEvent')) event.preventDefault();
			}
		};

	});

	Delegator.register('click', triggers);

})();