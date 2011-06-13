/*
---
description: Creates instances of Drag for resizable elements.
provides: [Behavior.Resizable]
requires: [Behavior/Behavior, More/Drag]
script: Behavior.Resizable.js
name: Behavior.Resizable
...
*/
Behavior.addGlobalFilter('Resizable', {
	//deprecated options
	deprecated: {
		handle: 'resize-handle',
		child: 'resize-child'
	},
	deprecatedAsJSON: {
		modifiers: 'resize-modifiers'
	},
	setup: function(element, api){
		var options = {};
		if (api.get('handle')) options.handle = element.getElement(api.get('handle'));
		if (api.get('modifiers')) options.modifiers = api.getAs(Object, 'modifiers');
		var target = element;
		if (api.get('child')) target = element.getElement(api.get('child'));
		var drag = target.makeResizable(options);
		api.onCleanup(drag.detach.bind(drag));
		return drag;
	}

});
