// Put this file in the parent directory of the runner folder. Also rename the file to Configuration.js

(function(context){

var Configuration = context.Configuration = {};

// Runner name
Configuration.name = 'More Behaviors';


// Presets - combine the sets and the source to a preset to easily run a test
Configuration.presets = {
	
	'more-behaviors': {
		sets: ['more-behaviors'],
		source: ['more-behaviors']
	}
	
};

// An object with default presets
Configuration.defaultPresets = {
	browser: 'more-behaviors',
	nodejs: 'more-behaviors',
	jstd: 'more-behaviors'
};


/*
 * An object with sets. Each item in the object should have an path key', '
 * that specifies where the spec files are and an array with all the files
 * without the .js extension relative to the given path
 */
Configuration.sets = {

	'more-behaviors': {
		path: 'more-behaviors/',
		files: [
			'../behavior/Specs/Behavior/Behavior.SpecsHelpers',
			'Drag/Behavior.Resizable',
			'Drag/Behavior.Sortable',
			'Forms/Behavior.FormRequest',
			'Forms/Behavior.FormValidator',
			'Forms/Behavior.OverText',
			'Fx/Behavior.FxAccordion',
			'Interface/Behavior.HtmlTable'
		]
	}

};


/*
 * An object with the source files. Each item should have an path key,
 * that specifies where the source files are and an array with all the files
 * without the .js extension relative to the given path
 */

Configuration.source = {

	'more-behaviors': {
		path: '',
		files: [
			'mootools-core/Source/Core/Core',
			'mootools-core/Source/Types/Array',
			'mootools-core/Source/Types/String',
			'mootools-core/Source/Types/Function',
			'mootools-core/Source/Types/Number',
			'mootools-core/Source/Types/Object',
			'mootools-core/Source/Types/Event',
			'mootools-core/Source/Class/Class',
			'mootools-core/Source/Class/Class.Extras',
			'mootools-core/Source/Browser/Browser',
			'mootools-core/Source/Slick/Slick.Parser',
			'mootools-core/Source/Slick/Slick.Finder',
			'mootools-core/Source/Element/Element',
			'mootools-core/Source/Element/Element.Event',
			'mootools-core/Source/Element/Element.Dimensions',
			'mootools-core/Source/Element/Element.Style',
			'mootools-core/Source/Fx/Fx',
			'mootools-core/Source/Fx/Fx.CSS',
			'mootools-core/Source/Fx/Fx.Tween',
			'mootools-core/Source/Fx/Fx.Morph',
			'mootools-core/Source/Request/Request',
			'mootools-core/Source/Request/Request.HTML',
			'mootools-core/Source/Utilities/JSON',
			'mootools-more/Source/More/More',
			'mootools-more/Source/Class/Class.Binds',
			'mootools-more/Source/Class/Events.Pseudos',
			'mootools-more/Source/Class/Class.Occlude',
			'mootools-more/Source/Class/Class.Refactor',
			'mootools-more/Source/Types/Object.Extras',
			'mootools-more/Source/Types/String.Extras',
			'mootools-more/Source/Types/String.QueryString',
			'mootools-more/Source/Element/Element.Event.Pseudos',
			'mootools-more/Source/Element/Element.Event.Pseudos.Keys',
			'mootools-more/Source/Element/Element.Delegation',
			'mootools-more/Source/Element/Element.Measure',
			'mootools-more/Source/Element/Element.Position',
			'mootools-more/Source/Element/Element.Shortcuts',
			'mootools-more/Source/Fx/Fx.Elements',
			'mootools-more/Source/Fx/Fx.Accordion',
			'mootools-more/Source/Locale/Locale',
			'mootools-more/Source/Locale/Locale.en-US.Form.Validator',
			'mootools-more/Source/Forms/Form.Request',
			'mootools-more/Source/Forms/Form.Validator',
			'mootools-more/Source/Forms/Form.Validator.Inline',
			'mootools-more/Source/Forms/OverText',
			'mootools-more/Source/Forms/Spinner',
			'mootools-more/Source/Drag/Drag',
			'mootools-more/Source/Drag/Drag.Move',
			'mootools-more/Source/Interface/Keyboard',
			'mootools-more/Source/Interface/Keyboard.Extras',
			'mootools-more/Source/Interface/HtmlTable',
			'mootools-more/Source/Interface/HtmlTable.Select',
			'mootools-more/Source/Interface/HtmlTable.Sort',
			'mootools-more/Source/Interface/HtmlTable.Zebra',
			'mootools-more/Source/Drag/Sortables',
			'mootools-more/Source/Utilities/Table',
			'behavior/Source/Behavior',
			'behavior/Source/Element.Data',
			'behavior/Source/BehaviorAPI',
			'../Source/Drag/Behavior.Resizable',
			'../Source/Drag/Behavior.Sortable',
			'../Source/Forms/Behavior.OverText',
			'../Source/Forms/Behavior.FormRequest',
			'../Source/Forms/Behavior.FormValidator',
			'../Source/Fx/Behavior.FxAccordion',
			'../Source/Interface/Behavior.HtmlTable'
		]
	}

};

})(typeof exports != 'undefined' ? exports : this);
