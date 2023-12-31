import { test } from '../../test';

export default test({
	html: '<button>bar</button>',

	async test({ assert, target, window }) {
		const [button] = target.querySelectorAll('button');

		const event = new window.MouseEvent('click', { bubbles: true });

		await button.dispatchEvent(event);
		assert.htmlEqual(target.innerHTML, '<button>foo</button>');

		await button.dispatchEvent(event);
		assert.htmlEqual(target.innerHTML, '<button>bar</button>');

		await button.dispatchEvent(event);
		assert.htmlEqual(target.innerHTML, '<button>foo</button>');
	}
});
