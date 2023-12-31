import { test } from '../../test';

export default test({
	get props() {
		return { props: { a: 1 } };
	},

	html: `
		<p>a: 1</p>
	`,

	test({ assert, component, target }) {
		component.props = {
			a: 2
		};

		assert.htmlEqual(target.innerHTML, '<p>a: 2</p>');
	}
});
