import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import swup from '@swup/astro';

import db from '@astrojs/db';

export default defineConfig({
    output: "server",
    integrations: [react(), tailwind({
        applyBaseStyles: false,
    }), swup({ theme: false, animationClass: false }), db()]
});