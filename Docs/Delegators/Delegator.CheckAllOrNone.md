Delegator Triggers: checkAll, checkNone
=======================

Provides click event delegators for selecting or deselecting a group of checkboxes.

### Example

	<div class="chex">
		<a data-trigger="checkAll" data-checkall-options ="'targets': '!div.chex input'">checkAll</a>
		<a data-trigger="checkNone" data-checknone-options="'targets': '!div.chex input'">checkNone</a></p>
		<hr/>
		<input type="checkbox"/>
		<input type="checkbox"/>
		<input type="checkbox"/>
		<input type="checkbox"/>
		<input type="checkbox"/>
	</div>

### Options

* targets - (*string*; **required**) a selector that will return the inputs to check/uncheck.

### See Also

MooTools' selector engine (Slick) supports [reversed combinators](https://github.com/mootools/slick/wiki/reversed-combinators).