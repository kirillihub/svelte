function noop() {}

function assign(tar, src) {
	for (var k in src) tar[k] = src[k];
	return tar;
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createElement(name) {
	return document.createElement(name);
}

function addResizeListener(element, fn) {
	if (getComputedStyle(element).position === 'static') {
		element.style.position = 'relative';
	}

	const object = document.createElement('object');
	object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
	object.type = 'text/html';

	let win;

	object.onload = () => {
		win = object.contentDocument.defaultView;
		win.addEventListener('resize', fn);
	};

	if (/Trident/.test(navigator.userAgent)) {
		element.appendChild(object);
		object.data = 'about:blank';
	} else {
		object.data = 'about:blank';
		element.appendChild(object);
	}

	return {
		cancel: () => {
			win.removeEventListener('resize', fn);
			element.removeChild(object);
		}
	};
}

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = noop;

	this._fragment.d(detach !== false);
	this._fragment = null;
	this._state = {};
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		var handler = handlers[i];

		if (!handler.__calling) {
			handler.__calling = true;
			handler.call(this, data);
			handler.__calling = false;
		}
	}
}

function get() {
	return this._state;
}

function init(component, options) {
	component._handlers = blankObject();
	component._bind = options._bind;

	component.options = options;
	component.root = options.root || component;
	component.store = options.store || component.root.store;
}

function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function set(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	this.root._lock = true;
	callAll(this.root._beforecreate);
	callAll(this.root._oncreate);
	callAll(this.root._aftercreate);
	this.root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign(assign({}, oldState), newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		this.fire("state", { changed: changed, current: this._state, previous: oldState });
		this._fragment.p(changed, this._state);
		this.fire("update", { changed: changed, current: this._state, previous: oldState });
	}
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

var proto = {
	destroy,
	get,
	fire,
	on,
	set,
	_recompute: noop,
	_set,
	_mount,
	_differs
};

/* generated by Svelte vX.Y.Z */

function create_main_fragment(component, ctx) {
	var div, div_resize_listener;

	function div_resize_handler() {
		component.set({ w: div.offsetWidth, h: div.offsetHeight });
	}

	return {
		c() {
			div = createElement("div");
			div.textContent = "some content";
			component.root._beforecreate.push(div_resize_handler);
		},

		m(target, anchor) {
			insertNode(div, target, anchor);
			div_resize_listener = addResizeListener(div, div_resize_handler);
		},

		p: noop,

		d(detach) {
			if (detach) {
				detachNode(div);
			}

			div_resize_listener.cancel();
		}
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);
	this._intro = true;

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._beforecreate);
	}
}

assign(SvelteComponent.prototype, proto);

export default SvelteComponent;
