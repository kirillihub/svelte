/* generated by Svelte vX.Y.Z */
import { assign, createComment, createElement, detachNode, init, insertNode, noop, proto } from "svelte/shared.js";

function create_main_fragment(component, state) {
	var if_block_anchor;

	function select_block_type(state) {
		if (state.foo) return create_if_block;
		return create_if_block_1;
	}
	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type !== (current_block_type = select_block_type(state))) {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy() {
			if_block.d();
		}
	};
}

// (1:0) {{#if foo}}
function create_if_block(component, state) {
	var p;

	return {
		c: function create() {
			p = createElement("p");
			p.textContent = "foo!";
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
		},

		u: function unmount() {
			detachNode(p);
		},

		d: noop
	};
}

// (3:0) {{else}}
function create_if_block_1(component, state) {
	var p;

	return {
		c: function create() {
			p = createElement("p");
			p.textContent = "not foo!";
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
		},

		u: function unmount() {
			detachNode(p);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor || null);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;