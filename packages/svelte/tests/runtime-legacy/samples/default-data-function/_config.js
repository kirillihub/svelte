import { test } from '../../test';

export default test({
	html: '<h1>Hello world!</h1>',

	test({ assert, component, target }) {
		component.name = () => 'everybody';
		assert.htmlEqual(target.innerHTML, '<h1>Hello everybody!</h1>');
	}
});
