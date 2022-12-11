import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line import/no-unresolved
import Unocss from 'unocss/vite';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	plugins: [vue(), Unocss({})],
	server: {
		port: 8080
	}
});
