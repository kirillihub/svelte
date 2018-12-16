/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, append, createElement, detachNode, flush, init, insert, run, safe_not_equal } from "svelte/internal.js";

function create_fragment(component, ctx) {
	var select, option0, option1, select_value_value, current;

	return {
		c() {
			select = createElement("select");
			option0 = createElement("option");
			option0.textContent = "1";
			option1 = createElement("option");
			option1.textContent = "2";
			option0.__value = "1";
			option0.value = option0.__value;
			option1.__value = "2";
			option1.value = option1.__value;
		},

		m(target, anchor) {
			insert(target, select, anchor);
			append(select, option0);
			append(select, option1);

			select_value_value = ctx.current;
			for (var i = 0; i < select.options.length; i += 1) {
				var option = select.options[i];

				if (option.__value === select_value_value) {
					option.selected = true;
					break;
				}
			}

			current = true;
		},

		p(changed, ctx) {
			if ((changed.current) && select_value_value !== (select_value_value = ctx.current)) {
				for (var i = 0; i < select.options.length; i += 1) {
					var option = select.options[i];

					if (option.__value === select_value_value) {
						option.selected = true;
						break;
					}
				}
			}
		},

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			if (detach) {
				detachNode(select);
			}
		}
	};
}

function define($$self, $$props) {
	let { current } = $$props;

	$$self.$$.get = () => ({ current });

	$$self.$$.set = $$props => {
		if ('current' in $$props) current = $$props.current;
	};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, define, create_fragment, safe_not_equal);
	}

	get current() {
		return this.$$.get().current;
	}

	set current(value) {
		this.$set({ current: value });
		flush();
	}
}

export default SvelteComponent;