import { test } from '../../test';

export default test({
	html: `
		<ul>
			<li>Gruyere</li>
			<li>Compté</li>
			<li>Beaufort</li>
			<li>Abondance</li>
		</ul>
	`,

	async test({ assert, component, target }) {
		await component.swap(0, 1);
		await Promise.resolve();

		assert.htmlEqual(
			target.innerHTML,
			`
			<ul>
				<li>Compté</li>
				<li>Gruyere</li>
				<li>Beaufort</li>
				<li>Abondance</li>
			</ul>
		`
		);
	}
});
