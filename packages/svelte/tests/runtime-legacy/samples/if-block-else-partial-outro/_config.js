import { test } from '../../test';

export default test({
	get props() {
		return { x: 1, y: false };
	},

	html: `
		<span>1</span>
	`,

	test({ assert, component, target }) {
		component.x = 2;
		assert.htmlEqual(
			target.innerHTML,
			`
			<span>2</span>
		`
		);
	}
});
