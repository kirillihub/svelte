import { test } from '../../test';

export default test({
	html: `
		<div>
			<p>unconditional</p>
		</div>`,

	test({ assert, component, target }) {
		component.foo = true;
		assert.htmlEqual(
			target.innerHTML,
			`
			<div>
				<p>conditional</p>
				<p>unconditional</p>
			</div>
		`
		);
	}
});
