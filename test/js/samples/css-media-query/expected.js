/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, append, createElement, detachNode, init, insert, noop, run, safe_not_equal } from "svelte/internal.js";

function add_css() {
	var style = createElement("style");
	style.id = 'svelte-1slhpfn-style';
	style.textContent = "@media(min-width: 1px){div.svelte-1slhpfn{color:red}}";
	append(document.head, style);
}

function create_fragment(component, ctx) {
	var div, current;

	return {
		c() {
			div = createElement("div");
			div.className = "svelte-1slhpfn";
		},

		m(target, anchor) {
			insert(target, div, anchor);
			current = true;
		},

		p: noop,

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			if (detach) {
				detachNode(div);
			}
		}
	};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1slhpfn-style")) add_css();
		init(this, options, noop, create_fragment, safe_not_equal);
	}
}

export default SvelteComponent;