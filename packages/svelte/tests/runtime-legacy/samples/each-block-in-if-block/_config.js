import { test } from '../../test';

export default test({
	get props() {
		return {
			dummy: false,
			fruits: ['Apple', 'Banana', 'Tomato']
		};
	},

	html: '<div><div>Apple</div><div>Banana</div><div>Tomato</div></div>',

	test({ assert, component, target }) {
		component.dummy = true;
		assert.htmlEqual(
			target.innerHTML,
			'<div><div>Apple</div><div>Banana</div><div>Tomato</div></div>'
		);
	}
});
