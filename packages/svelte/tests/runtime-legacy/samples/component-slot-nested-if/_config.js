import { ok, test } from '../../test';

export default test({
	html: `
    <input>
	`,
	async test({ assert, target, window }) {
		const input = target.querySelector('input');
		ok(input);

		input.value = 'a';
		await input.dispatchEvent(new window.Event('input'));

		assert.htmlEqual(
			target.innerHTML,
			`
			<input>
			Display: a
		`
		);

		input.value = 'abc';
		await input.dispatchEvent(new window.Event('input'));

		assert.htmlEqual(
			target.innerHTML,
			`
			<input>
			Display: abc
		`
		);
	}
});
