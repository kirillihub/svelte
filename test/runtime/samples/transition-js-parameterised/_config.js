export default {
	solo: true,

	test(assert, component, target, window, raf) {
		component.set({ visible: true });
		const div = target.querySelector('div');
		assert.equal(div.foo, 0);

		raf.tick(50);
		assert.equal(div.foo, 100);

		raf.tick(100);
		assert.equal(div.foo, 200);

		raf.tick(101);

		component.destroy();
	},
};
