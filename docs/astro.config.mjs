import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Infrastructure Team 4 - Documentation',
			customCss: [ './src/styles/civica.css' ],
			logo: {
				light: './src/assets/logo/civica-light.png',
				dark: './src/assets/logo/civica-dark.png',
			},
			social: {
				github: 'https://github.com/surajmjadhav/astro',
			},
			editLink: {
				baseUrl: 'https://github.com/surajmjadhav/astro.git/tree/main/docs',
			},
			pagination: false,
			sidebar: [
				{
					label: 'Introduction',
					collapsed: false,
					autogenerate: {
						directory: 'intro',
						collapsed: true
					},
				},
				{
					label: 'Documentation',
					collapsed: false,
					autogenerate: {
						directory: 'documentation',
						collapsed: true
					},
				},
			],
		}),
	],
});
