/* generated by Svelte vX.Y.Z */
import { appendNode, assign, createElement, createText, detachNode, init, insertNode, protoDev } from "svelte/shared.js";

function bar({ foo }) {
	return foo * 2;
}

function create_main_fragment(component, ctx) {
	var p, text_value = ctx.Math.max(0, ctx.foo), text, text_1, text_2;

	return {
		c: function create() {
			p = createElement("p");
			text = createText(text_value);
			text_1 = createText("\n\t");
			text_2 = createText(ctx.bar);
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
			appendNode(text, p);
			appendNode(text_1, p);
			appendNode(text_2, p);
		},

		p: function update(changed, ctx) {
			if ((changed.Math || changed.foo) && text_value !== (text_value = ctx.Math.max(0, ctx.foo))) {
				text.data = text_value;
			}

			if (changed.bar) {
				text_2.data = ctx.bar;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				detachNode(p);
			}
		}
	};
}

function SvelteComponent(options) {
	this._debugName = '<SvelteComponent>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	init(this, options);
	this._state = assign({ Math : Math }, options.data);
	this._recompute({ foo: 1 }, this._state);
	if (!('foo' in this._state)) console.warn("<SvelteComponent> was created without expected data property 'foo'");
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		if (options.hydrate) throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		this._fragment.c();
		this._mount(options.target, options.anchor, true);
	}
}

assign(SvelteComponent.prototype, protoDev);

SvelteComponent.prototype._checkReadOnly = function _checkReadOnly(newState) {
	if ('bar' in newState && !this._updatingReadonlyProperty) throw new Error("<SvelteComponent>: Cannot set read-only property 'bar'");
};

SvelteComponent.prototype._recompute = function _recompute(changed, state) {
	if (changed.foo) {
		if (this._differs(state.bar, (state.bar = bar(state)))) changed.bar = true;
	}
}
export default SvelteComponent;