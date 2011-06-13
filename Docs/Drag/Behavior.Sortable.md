Behavior Filter: Behavior.Sortable
===================================

Creates an instance of [Sortables][] for an element using the `Sortables` data filter.

### Example

	<div data-behavior="Sortable" data-sortable-options="
	  'state': '#order',
	  'property': 'value',
	  'property-child': 'input[type=radio]'
	">
		<ul>
			<li>First   <input type="radio" name="foo" value="1" checked="true"/></li>
			<li>Second  <input type="radio" name="foo" value="2"/></li>
			<li>Third   <input type="radio" name="foo" value="3"/></li>
			<li>Fourth  <input type="radio" name="foo" value="4"/></li>
			<li>Fifth   <input type="radio" name="foo" value="5"/></li>
			<li>Sixth   <input type="radio" name="foo" value="6"/></li>
			<li>Seventh <input type="radio" name="foo" value="7"/></li>
			<li>Eigth   <input type="radio" name="foo" value="8"/></li>
			<li>Nineth  <input type="radio" name="foo" value="9"/></li>
			<li>Tenth   <input type="radio" name="foo" value="10"/></li>
		</ul>
		<input type="hidden" name="order" id="order"/>
	</div>

### Options

* state - (*string*) A CSS selector for the target element which is updated with the order values when the user changes the order. If an input, its value is set, else its innerHTML is set.
* property-child - (*string*) A CSS selector used with the `property` option. If specified, the property is read from the child of the sorted element that matches this selector. In the example above, the `value` property is read from the `input` in each row.
* property - (*string*) The property of the sorted item to read. If a property is not set, the element's `name`, `value`, or `id` are used (in that order of preference).

[Sortables]: http://mootools.net/docs/more/Drag/Sortables