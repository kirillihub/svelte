import { ok, test } from '../../test';

export default test({
	html: `
		<p>foo</p>
		<input>
	`,

	ssrHtml: `
		<p>foo</p>
		<input value=foo>
	`,

	async test({ assert, target, window }) {
		const input = target.querySelector('input');
		ok(input);

		input.value = 'bar';
		await input.dispatchEvent(new window.Event('input'));

		assert.htmlEqual(
			target.innerHTML,
			`
			<p>bar</p>
			<input>
		`
		);
	}
});
