import {
	SvelteComponent,
	component_subscribe,
	init,
	safe_not_equal,
	set_store_value
} from "svelte/internal";

import { count } from "./store.js";

function instance($$self, $$props, $$invalidate) {
	let $count;
	component_subscribe($$self, count, $$value => $$invalidate("$count", $count = $$value));

	function increment() {
		set_store_value(count, $count++, $count);
	}

	return { increment };
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, null, safe_not_equal, { increment: 0 });
	}

	get increment() {
		return this.$$.ctx.increment;
	}
}

export default Component;