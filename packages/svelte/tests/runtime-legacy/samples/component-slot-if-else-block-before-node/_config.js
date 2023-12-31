import { test } from '../../test';

export default test({
	html: `
		<p>disabled</p>
		<p>unconditional</p>`,

	test({ assert, component, target }) {
		component.enabled = true;
		assert.htmlEqual(
			target.innerHTML,
			`
			<p>enabled</p>
			<p>unconditional</p>
		`
		);
	}
});
