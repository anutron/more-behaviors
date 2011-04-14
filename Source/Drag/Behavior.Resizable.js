/*
---
description: Creates instances of Drag for resizable elements.
provides: [Behavior.Resizable]
requires: [Behavior/Behavior, More/Drag]
script: Behavior.Resizable.js
...
*/
(function(){

	Behavior.addGlobalFilters({

		Resizable: function(element){
			var options = {};
			if (element.getData('resize-handle')) options.handle = element.getElement(element.getData('resize-handle'));
			if (element.getData('resize-modifiers')) options.modifiers = element.getJSONData('resize-modifiers');
			var target = element;
			if (element.getData('resize-child')) target = element.getElement(element.getData('resize-child'));
			var drag = target.makeResizable(options);
			this.markForCleanup(element, function(){
				drag.detach();
			});
			return drag;
		}

	});

})();