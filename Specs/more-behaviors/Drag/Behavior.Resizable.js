(function(){

	var str = '<div data-filters="Resizable" data-resize-handle="#textresizer" data-resize-child="textarea" data-resize-modifiers="{\'x\': false}"><textarea tabindex="4" id="comment" class="resizable" rows="15" cols="50" name="comment"></textarea><div id="textresizer"></div></div>';
	Behavior.addFilterTest({
		filterName: 'Resizable',
		desc: 'Creates an instance of Resizable',
		content: str,
		returns: Drag
	});
	Behavior.addFilterTest({
		filterName: 'Resizable',
		desc: 'Creates an instance of Resizable (x10)',
		content: str,
		multiplier: 10,
		noSpecs: true,
		returns: Drag
	});

})();