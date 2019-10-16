import {
	SvelteComponent,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_input_type
} from "svelte/internal";

function create_fragment(ctx) {
	let input;

	return {
		c() {
			input = element("input");
			set_input_type(input, "search");
		},
		m(target, anchor) {
			insert(target, input, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(input);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Component;