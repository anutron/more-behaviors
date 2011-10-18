/*
---
name: Behavior.Sortable Tests
description: n/a
requires: [More-Behaviors/Behavior.Sortable, Behavior-Tests/Behavior.SpecsHelpers]
provides: [Behavior.Sortable.Tests]
...
*/

(function(){

	var str =
	'<ul id="SortableExample" data-behavior="Sortable" data-sortable-state="#order">\
		<li id="1">First <input type="radio" name="foo" checked="true"/></li>\
		<li id="2">Second <input type="radio" name="foo"/></li>\
		<li id="3">Third <input type="radio" name="foo"/></li>\
		<li id="4">Fourth <input type="radio" name="foo"/></li>\
		<li id="5">Fifth <input type="radio" name="foo"/></li>\
		<li id="6">Sixth <input type="radio" name="foo"/></li>\
		<li id="7">Seventh <input type="radio" name="foo"/></li>\
		<li id="8">Eigth <input type="radio" name="foo"/></li>\
		<li id="9">Nineth <input type="radio" name="foo"/></li>\
		<li id="10">Tenth <input type="radio" name="foo"/></li>\
	</ul>\
	<div id="order"></div>';
	Behavior.addFilterTest({
		filterName: 'Sortable',
		desc: 'Creates an instance of Sortables',
		content: str,
		returns: Sortables,
		expect: function(element, instance){
			instance.fireEvent('complete');
			expect(element.getParent().getElement('#order').get('html')).toBe('1,2,3,4,5,6,7,8,9,10');
		}
	});
	Behavior.addFilterTest({
		filterName: 'Sortable',
		desc: 'Creates an instance of Sortables (x10)',
		content: str,
		multiplier: 10,
		specs: false,
		returns: Sortables
	});

	var multi =
	'<div data-behavior="Sortable" class="example2" data-sortable-lists="ul" data-sortable-state=".order2">\
		<ul style="float: left; width: 20%; min-height: 60px; border: 1px solid #999; margin-right: 8px;">\
			<li id="1" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">First</li>\
			<li id="2" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Second</li>\
			<li id="3" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Third</li>\
		</ul>\
		<ul style="float: left; width: 20%; min-height: 60px; border: 1px solid #999; margin-right: 8px;">\
			<li id="4" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Four</li>\
			<li id="5" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Five</li>\
			<li id="6" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Six</li>\
		</ul>\
		<ul style="float: left; width: 20%; min-height: 60px; border: 1px solid #999; margin-right: 8px;">\
			<li id="7" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Seven</li>\
			<li id="8" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Eight</li>\
			<li id="9" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Nine</li>\
		</ul>\
		<div class="order2" style="clear:both"></div>\
	</div>';
	Behavior.addFilterTest({
		filterName: 'Sortable',
		desc: 'Creates an instance of Sortables (multi)',
		content: str,
		returns: Sortables
	});
	Behavior.addFilterTest({
		filterName: 'Sortable',
		desc: 'Creates an instance of Sortables (multi) (x10)',
		content: str,
		multiplier: 10,
		specs: false,
		returns: Sortables
	});

// deprecated html syntax; spec here to ensure it's still supported

	var dep_str =
	'<ul id="SortableExample" data-behavior="Sortable" data-sort-state="#order">\
		<li id="1">First <input type="radio" name="foo" checked="true"/></li>\
		<li id="2">Second <input type="radio" name="foo"/></li>\
		<li id="3">Third <input type="radio" name="foo"/></li>\
		<li id="4">Fourth <input type="radio" name="foo"/></li>\
		<li id="5">Fifth <input type="radio" name="foo"/></li>\
		<li id="6">Sixth <input type="radio" name="foo"/></li>\
		<li id="7">Seventh <input type="radio" name="foo"/></li>\
		<li id="8">Eigth <input type="radio" name="foo"/></li>\
		<li id="9">Nineth <input type="radio" name="foo"/></li>\
		<li id="10">Tenth <input type="radio" name="foo"/></li>\
	</ul>\
	<div id="order"></div>';
	Behavior.addFilterTest({
		filterName: 'Sortable',
		desc: 'Creates an instance of Sortables (deprecated)',
		content: dep_str,
		returns: Sortables,
		benchmarks: false,
		expect: function(element, instance){
			instance.fireEvent('complete');
			expect(element.getParent().getElement('#order').get('html')).toEqual('1,2,3,4,5,6,7,8,9,10');
		}
	});

	var dep_multi =
	'<div data-behavior="Sortable" class="example2" data-sort-lists="ul" data-sort-state=".order2">\
		<ul style="float: left; width: 20%; min-height: 60px; border: 1px solid #999; margin-right: 8px;">\
			<li id="1" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">First</li>\
			<li id="2" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Second</li>\
			<li id="3" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Third</li>\
		</ul>\
		<ul style="float: left; width: 20%; min-height: 60px; border: 1px solid #999; margin-right: 8px;">\
			<li id="4" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Four</li>\
			<li id="5" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Five</li>\
			<li id="6" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Six</li>\
		</ul>\
		<ul style="float: left; width: 20%; min-height: 60px; border: 1px solid #999; margin-right: 8px;">\
			<li id="7" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Seven</li>\
			<li id="8" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Eight</li>\
			<li id="9" style="margin: 2px !important; padding: 2px !important; background: #ccc !important; cursor: pointer;">Nine</li>\
		</ul>\
		<div class="order2" style="clear:both"></div>\
	</div>';
	Behavior.addFilterTest({
		filterName: 'Sortable',
		desc: 'Creates an instance of Sortables (multi) (deprecated)',
		content: dep_multi,
		returns: Sortables,
		benchmarks: false
	});

})();