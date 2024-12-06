import { skeleton } from '@skeletonlabs/tw-plugin';
import {myTheme} from './src/theme.ts';
import type { Config } from 'tailwindcss';
import { join } from 'path';

export default {
  darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton(
            {
                themes: {
                    custom: [ myTheme ]
                }
            }
        )
	]
} satisfies Config;
