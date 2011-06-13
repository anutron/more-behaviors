Behavior Filter: Behavior.Resizable
===================================

Creates an instance of [Drag][] for an element using the `Resizable` data filter.

### Example

	<div data-behavior="Resizable" data-resizable-options="
	  'handle': '#textresizer',
	  'child':'textarea',
	  'modifiers': {'x': false}
	">
		<textarea tabindex="4" id="comment" class="resizable" rows="15" cols="50" name="comment"></textarea>
		<div id="textresizer"></div>
	</div>


### Options

* handle - (*string*) a CSS selector run from the target element to find a handle. Passed to [Drag][] as `options.handle`.
* child - (*string*) a CSS selector run from the target element to find the element to be resized. If not defined the target element is resized.
* modifiers - (*object*) an object with key/values for x/y modifiers. Passed to [Drag][] as `options.modifiers`.

[Drag]: http://mootools.net/docs/more/Drag/Drag#Element:makeResizable