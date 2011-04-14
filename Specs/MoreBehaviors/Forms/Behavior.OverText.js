(function(){

	var str = '<input data-filters="OverText" title="test"/>';
	Behavior.addFilterTest({
		filterName: 'OverText',
		desc: 'Creates an instance of OverText',
		content: str,
		returns: OverText
	});
	Behavior.addFilterTest({
		filterName: 'OverText',
		desc: 'Creates an instance of OverText',
		content: str,
		returns: OverText,
		multiplier: 10,
		noSpecs: true
	});

})();