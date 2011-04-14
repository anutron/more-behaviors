/*
---
description: Creates an Fx.Accordion from any element with Accordion in its data-filters property.  Uses the .toggle elements within the element as the toggles and the .target elements as the targets. 
provides: [Behavior.Accordion, Behavior.FxAccordion]
requires: [Behavior/Behavior, More/Fx.Accordion, Behavior/Element.Data]
script: Behavior.Accordion.js
...
*/

Behavior.addGlobalFilters({
	Accordion: function(element) {
		var toggles = element.getData('toggler-elements') || '.toggle';
		var sections = element.getData('section-elements') || '.target';
		var accordion = new Fx.Accordion(toggles, sections);
		this.markForCleanup(element, function() {
			accordion.detach();
		});
		return accordion;
	}
});

