/*
---
description: Provides functionality for links that load content into a target element via ajax.
provides: [Delegator.Ajax]
requires: [Behavior/Delegator, Core/Request.HTML, More/Spinner, More/Object.Extras]
script: Delegator.Ajax.js
name: Delegator.Ajax
...
*/

(function(){

	Delegator.register('click', 'Ajax', {
		require: ['target'],
		defaults: {
			action: 'injectBottom'
		},
		handler: function(event, link, api){
			var target,
				action = api.get('action'),
				selector = api.get('target');
			if (selector) {
				if (selector == "self") {
					target = link;
				} else {
					target = link.getElement(selector);
				}
			}

			if (!target) api.fail('ajax trigger error: element matching selector %s was not found', selector);

			var requestTarget = new Element('div');

			var spinnerTarget = api.get('spinner-target');
			if (spinnerTarget) spinnerTarget = link.getElement(spinnerTarget);

			event.preventDefault();
			new Request.HTML(
				Object.cleanValues({
					method: 'get',
					evalScripts: api.get('evalScripts'),
					url: api.get('href') || link.get('href'),
					spinnerTarget: spinnerTarget || target,
					useSpinner: api.getAs(Boolean, 'useSpinner'),
					update: requestTarget,
					onSuccess: function(){
						//reverse the elements and inject them
						//reversal is required since it injects each after the target
						//pushing down the previously added element
						var elements = requestTarget.getChildren();
						if (api.get('filter')){
							elements = new Element('div').adopt(elements).getElements(api.get('filter'));
						}
						switch(action){
							case 'replace':
								var container = target.getParent();
								elements.reverse().injectAfter(target);
								api.fireEvent('destroyDom', target);
								target.destroy();
								api.fireEvent('ammendDom', [container, elements]);
								break;
							case 'update':
								api.fireEvent('destroyDom', target.getChildren());
								target.empty();
								elements.inject(target);
								api.fireEvent('ammendDom', [target, elements]);
								break;
							default:
								//injectTop, injectBottom, injectBefore, injectAfter
								if (action == "injectTop" || action == "injectAfter") elements.reverse();
								elements[action](target);
								api.fireEvent('ammendDom', [target, elements]);
						}
					}
				})
			).send();
		}
	});

})();


