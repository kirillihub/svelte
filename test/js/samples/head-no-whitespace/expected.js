import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	noop,
	safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
	let meta0;
	let meta1;

	return {
		c() {
			meta0 = element("meta");
			meta1 = element("meta");
			attr(meta0, "name", "twitter:creator");
			attr(meta0, "content", "@sveltejs");
			attr(meta1, "name", "twitter:title");
			attr(meta1, "content", "Svelte");
		},
		m(target, anchor) {
			append(document.head, meta0);
			append(document.head, meta1);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			detach(meta0);
			detach(meta1);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;