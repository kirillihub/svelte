import { test } from '../../test';

export default test({
	get props() {
		return { a: true, b: false };
	},

	html: '<p>i am visible</p>',

	test({ assert, component, target }) {
		component.a = false;
		assert.htmlEqual(target.innerHTML, '');
		component.b = true;
		assert.htmlEqual(target.innerHTML, '<p>i am visible</p>');
	}
});
