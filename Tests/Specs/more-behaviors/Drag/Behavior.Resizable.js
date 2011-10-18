/*
---
name: Behavior.Resizable Tests
description: n/a
requires: [More-Behaviors/Behavior.Resizable, Behavior-Tests/Behavior.SpecsHelpers]
provides: [Behavior.Resizable.Tests]
...
*/

(function(){


	var str =
	'<div data-behavior="Resizable" data-resizable-handle="#textresizer" data-resizable-child="textarea" data-resizable-modifiers="{\'x\': false}">\
		<textarea tabindex="4" id="comment" class="resizable" rows="15" cols="50" name="comment"></textarea>\
		<div id="textresizer"></div>\
	</div>';
	Behavior.addFilterTest({
		filterName: 'Resizable',
		desc: 'Creates an instance of Resizable',
		content: str,
		returns: Drag,
		expect: function(element, instance){
			expect(instance.options.handle.id).toBe('textresizer');
		}
	});
	Behavior.addFilterTest({
		filterName: 'Resizable',
		desc: 'Creates an instance of Resizable (x10)',
		content: str,
		multiplier: 10,
		specs: false,
		returns: Drag
	});

// deprecated html syntax; spec here to ensure it's still supported

	var deprecated =
	'<div data-behavior="Resizable" data-resize-handle="#textresizer" data-resize-child="textarea" data-resize-modifiers="{\'x\': false}">\
		<textarea tabindex="4" id="comment" class="resizable" rows="15" cols="50" name="comment"></textarea>\
		<div id="textresizer"></div>\
	</div>';
	Behavior.addFilterTest({
		filterName: 'Resizable',
		desc: 'Creates an instance of Resizable (deprecated)',
		content: deprecated,
		returns: Drag,
		benchmarks: false,
		expect: function(element, instance){
			expect(instance.options.handle.id).toBe('textresizer');
		}
	});

})();