/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, addListener, createElement, detachNode, flush, init, insert, noop, safe_not_equal, setAttribute } from "svelte/internal";

function create_fragment($$, ctx) {
	var input, dispose;

	return {
		c() {
			input = createElement("input");
			setAttribute(input, "type", "checkbox");
			dispose = addListener(input, "change", ctx.input_change_handler);
		},

		m(target, anchor) {
			insert(target, input, anchor);

			input.checked = ctx.foo;
		},

		p(changed, ctx) {
			if (changed.foo) input.checked = ctx.foo;
		},

		i: noop,
		o: noop,

		d(detach) {
			if (detach) {
				detachNode(input);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { foo } = $$props;

	function input_change_handler() {
		foo = this.checked;
		$$invalidate('foo', foo);
	}

	$$self.$set = $$props => {
		if ('foo' in $$props) $$invalidate('foo', foo = $$props.foo);
	};

	return { foo, input_change_handler };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get foo() {
		return this.$$.ctx.foo;
	}

	set foo(foo) {
		this.$set({ foo });
		flush();
	}
}

export default SvelteComponent;