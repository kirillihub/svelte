import { PUBLIC_VERSION } from '../version.js';

if (typeof window !== 'undefined')
	// @ts-ignore
	(window.__svelte ||= { v: new Set() }).v.add(PUBLIC_VERSION);
