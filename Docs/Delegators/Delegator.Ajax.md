Delegator Trigger: Ajax
=======================

Loads the response of a link's URL into a specified target.

### Example

	<a href="/get/list/item.php"
		data-trigger="Ajax"
		data-ajax-options="
			'action': 'injectBottom',
			'target': '!body ul'
		">Add to bottom of list.</a>
	<ul>
		<li>The response from the link will be injected after this list item.</li>
	</ul>

The above example will load the response from the links HREF (`get/list/item.php`) and load it into the specified target at the bottom.

### Options

* target - (*string*; required) - a selector which will return the DOM element to update. Use selectors provided by [Slick](https://github.com/mootools/slick) to select parents and sibling trees.
* action - (*string*; optional) - the action to take on the target. Any of the options described below.
* filter - (*string*; optional) - a selector to run against the response whose response will be used to update the DOM instead of the full response.

### Actions

* `replace` - replaces the target with the response.
* `update` - empties the target and injects the response into it
* `injectTop` - inserts the response at the top of the target before any of it's other children.
* `injectBottom` - inserts the response at the bottom of the target after any of it's other children.
* `injectBefore` - inserts the response before the target.
* `injectAfter` - inserts the response after the target.

### Notes

If you're using [Behavior](http://github.com/anutron/behavior) with Delegator, you should connect the two so that the response can be run through Behavior's filtering mechanisms. See the documentation for Delegator.