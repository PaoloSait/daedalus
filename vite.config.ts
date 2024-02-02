import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	// Added this thing below to stop an error. See: https://github.com/portabletext/svelte-portabletext/issues/28#issuecomment-1840674415
	ssr: { noExternal: ['@portabletext/svelte'] },
});
