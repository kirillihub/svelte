import { test } from '../../test';

export default test({
	html: `
		One
		Inner
	`,

	test({ assert, component, target }) {
		component.foo = false;
		assert.htmlEqual(target.innerHTML, '');

		component.foo = true;
		assert.htmlEqual(target.innerHTML, 'One\nInner');
	}
});
