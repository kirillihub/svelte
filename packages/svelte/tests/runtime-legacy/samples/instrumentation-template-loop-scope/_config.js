import { test } from '../../test';

export default test({
	html: `
		<button>foo</button>
		<p>x: 0</p>
	`,

	async test({ assert, target, window }) {
		const buttons = target.querySelectorAll('button');
		const click = new window.MouseEvent('click', { bubbles: true });

		await buttons[0].dispatchEvent(click);
		assert.htmlEqual(
			target.innerHTML,
			`
			<button>foo</button>
			<p>x: 42</p>
		`
		);
	}
});
