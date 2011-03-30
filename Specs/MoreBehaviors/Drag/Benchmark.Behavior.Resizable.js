(function(){

	var str = '<div data-filters="Resizable" data-resize-handle="#textresizer" data-resize-child="textarea" data-resize-modifiers="{\'x\': false}"><textarea tabindex="4" id="comment" class="resizable" rows="15" cols="50" name="comment"></textarea><div id="textresizer"></div></div>';
	MooBench.addBehaviorTest('Resizable', str);
	MooBench.addMultipleBehaviorTest('Resizable x10', str, 10);

})();