// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'fischfroschi Documentation',
            logo: {
                src: './public/favicon.svg'
            },
			social: [
                { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@fischfroschi.contact' },
                { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mario-de-cesare-229772300' },
                { icon: 'cloud-download', label: 'Fab Store', href: 'https://www.fab.com/sellers/fischfroschi' }
            ],
			sidebar: [
				{
					label: 'Weapon Precision System',
					items: [
						{ label: 'Overview', link: 'weaponprecisionsystem' },
                        { label: 'Tutorial', link: 'weaponprecisionsystem/tutorial' },
					],
				}
			],
		}),
	],
});
