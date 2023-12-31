import { test, ok } from '../../test';

export default test({
	html: `
		<svg>
			<foreignObject x="0" y="0" width="100" height="100">
				<p>some text</p>
			</foreignObject>
		</svg>
	`,

	test({ assert, target }) {
		const foreignObject = target.querySelector('foreignObject');
		ok(foreignObject);
		assert.equal(foreignObject.namespaceURI, 'http://www.w3.org/2000/svg');

		const p = target.querySelector('p');
		ok(p);
		assert.equal(p.namespaceURI, 'http://www.w3.org/1999/xhtml');
	}
});
