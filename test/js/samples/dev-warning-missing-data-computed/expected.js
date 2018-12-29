/* generated by Svelte vX.Y.Z */
import { SvelteComponentDev, addLoc, append, createElement, createText, detachNode, flush, init, insert, run, safe_not_equal, setData } from "svelte/internal";

const file = undefined;

function create_fragment(component, ctx) {
	var p, text0_value = Math.max(0, ctx.foo), text0, text1, text2, current;

	return {
		c: function create() {
			p = createElement("p");
			text0 = createText(text0_value);
			text1 = createText("\n\t");
			text2 = createText(ctx.bar);
			addLoc(p, file, 7, 0, 67);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert(target, p, anchor);
			append(p, text0);
			append(p, text1);
			append(p, text2);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((changed.foo) && text0_value !== (text0_value = Math.max(0, ctx.foo))) {
				setData(text0, text0_value);
			}

			if (changed.bar) {
				setData(text2, ctx.bar);
			}
		},

		i: function intro(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d: function destroy(detach) {
			if (detach) {
				detachNode(p);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { foo } = $$props;

	let bar;

	$$self.$$.set = $$props => {
		if ('foo' in $$props) $$invalidate('foo', foo = $$props.foo);
	};

	$$self.$$.update = ($$dirty = { foo: 1 }) => {
		if ($$dirty.foo) {
			bar = foo * 2; $$invalidate('bar', bar);
		}
	};

	return { foo, bar };
}

class SvelteComponent extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.foo === undefined && !('foo' in props)) {
			console.warn("<SvelteComponent> was created without expected prop 'foo'");
		}
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