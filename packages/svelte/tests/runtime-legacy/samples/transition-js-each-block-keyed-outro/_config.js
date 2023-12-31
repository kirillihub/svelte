import { test } from '../../test';

export default test({
	get props() {
		return {
			things: [{ name: 'a' }, { name: 'b' }, { name: 'c' }]
		};
	},

	test({ assert, component, target, raf }) {
		const divs = /** @type {NodeListOf<HTMLDivElement & { foo: number }>} */ (
			target.querySelectorAll('div')
		);

		component.things = [{ name: 'a' }, { name: 'c' }];

		const divs2 = target.querySelectorAll('div');

		raf.tick(0);
		assert.strictEqual(divs[0], divs2[0]);
		assert.strictEqual(divs[1], divs2[1]);
		assert.strictEqual(divs[2], divs2[2]);

		raf.tick(50);
		assert.equal(divs[0].foo, undefined);
		assert.equal(divs[1].foo, 0.5);
		assert.equal(divs[2].foo, undefined);
		raf.tick(100);
	}
});
