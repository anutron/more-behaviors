// Put this file in the parent directory of the runner folder. Also rename the file to Configuration.js

(function(context){

var Configuration = context.Configuration = {};

// Runner name
Configuration.name = 'More Behaviors';


// Presets - combine the sets and the source to a preset to easily run a test
Configuration.presets = {
	
	'MoreBehaviors': {
		sets: ['MoreBehaviors'],
		source: ['MoreBehaviors']
	}
	
};

// An object with default presets
Configuration.defaultPresets = {
	browser: 'MoreBehaviors',
	nodejs: 'MoreBehaviors',
	jstd: 'MoreBehaviors'
};


/*
 * An object with sets. Each item in the object should have an path key', '
 * that specifies where the spec files are and an array with all the files
 * without the .js extension relative to the given path
 */
Configuration.sets = {

	'MoreBehaviors': {
		path: 'MoreBehaviors/',
		files: [
			'../behavior/Specs/Behavior/Behavior.SpecsHelpers',
			'Drag/Benchmark.Behavior.Resizable',
			'Drag/Benchmark.Behavior.Sortable',
			'Forms/Benchmark.Behavior.FormRequest',
			'Forms/Benchmark.Behavior.OverText',
			'Fx/Benchmark.Behavior.FxAccordion',
			'Interface/Benchmark.Behavior.HtmlTable'
		]
	}

};


/*
 * An object with the source files. Each item should have an path key,
 * that specifies where the source files are and an array with all the files
 * without the .js extension relative to the given path
 */

Configuration.source = {

	'MoreBehaviors': {
		path: '',
		files: [
			'mootools-core/Source/Core/Core',
			'mootools-core/Source/Native/Array',
			'mootools-core/Source/Native/String',
			'mootools-core/Source/Native/Function',
			'mootools-core/Source/Native/Number',
			'mootools-core/Source/Native/Hash',
			'mootools-core/Source/Native/Event',
			'mootools-core/Source/Class/Class',
			'mootools-core/Source/Class/Class.Extras',
			'mootools-core/Source/Core/Browser',
			'mootools-core/Source/Element/Element',
			'mootools-core/Source/Element/Element.Dimensions',
			'mootools-core/Source/Element/Element.Event',
			'mootools-core/Source/Element/Element.Style',
			'mootools-core/Source/Utilities/Selectors',
			'mootools-core/Source/Utilities/JSON',
			'mootools-core/Source/Fx/Fx',
			'mootools-core/Source/Fx/Fx.CSS',
			'mootools-core/Source/Fx/Fx.Tween',
			'mootools-core/Source/Fx/Fx.Morph',
			'mootools-core/Source/Request/Request',
			'mootools-core/Source/Request/Request.HTML',
			'mootools-more/Source/Core/More',
			'mootools-more/Source/Core/Log',
			'mootools-more/Source/Class/Class.Binds',
			'mootools-more/Source/Class/Class.Occlude',
			'mootools-more/Source/Class/Class.Refactor',
			'mootools-more/Source/Native/String.Extras',
			'mootools-more/Source/Native/String.QueryString',
			'mootools-more/Source/Element/Element.Delegation',
			'mootools-more/Source/Element/Element.Measure',
			'mootools-more/Source/Element/Element.Position',
			'mootools-more/Source/Element/Element.Shortcuts',
			'mootools-more/Source/Fx/Fx.Elements',
			'mootools-more/Source/Fx/Fx.Accordion',
			'mootools-more/Source/Forms/Form.Request',
			'mootools-more/Source/Forms/OverText',
			'mootools-more/Source/Forms/Spinner',
			'mootools-more/Source/Drag/Drag',
			'mootools-more/Source/Drag/Drag.Move',
			'mootools-more/Source/Interface/Keyboard',
			'mootools-more/Source/Interface/Keyboard.Extras',
			'mootools-more/Source/Interface/HtmlTable',
			'mootools-more/Source/Interface/HtmlTable.Select',
			'mootools-more/Source/Interface/HtmlTable.Sort',
			'mootools-more/Source/Interface/HtmlTable.Tree',
			'mootools-more/Source/Interface/HtmlTable.Zebra',
			'mootools-more/Source/Interface/HtmlTable.Resize',
			'mootools-more/Source/Drag/Sortables',
			'mootools-more/Source/Utilities/Table',
			'behavior/Source/Behavior',
			'behavior/Source/Element.Data',
			'../Source/Drag/Behavior.Resizable',
			'../Source/Drag/Behavior.Sortable',
			'../Source/Forms/Behavior.OverText',
			'../Source/Forms/Behavior.FormRequest',
			'../Source/Fx/Behavior.FxAccordion',
			'../Source/Interface/Behavior.HtmlTable'
		]
	}

};

})(typeof exports != 'undefined' ? exports : this);
