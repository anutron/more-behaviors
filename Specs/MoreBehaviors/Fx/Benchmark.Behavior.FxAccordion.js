(function(){

	var str = '<div data-filters="Accordion" style="width: 300px; margin: 10px;"><div class="toggle" style="cursor:pointer; background: #777; padding: 2px;">Toggle 1</div><div class="target" style="padding: 4px;">This area is controlled by Toggle 1.</div><div class="toggle" style="cursor:pointer; background: #777; padding: 2px;">Toggle 2</div><div class="target" style="padding: 4px;">This area is controlled by Toggle 2.</div><div class="toggle" style="cursor:pointer; background: #777; padding: 2px;">Toggle 3</div><div class="target" style="padding: 4px;">This area is controlled by Toggle 3.</div></div>';
	MooBench.addBehaviorTest('Accordion', str);
	MooBench.addMultipleBehaviorTest('Accordion x10', str, 10);

})();