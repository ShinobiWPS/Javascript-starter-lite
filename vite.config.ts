/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		TanStackRouterVite({ autoCodeSplitting: true }),
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    basicSsl(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
    }),
  ],
	test: { globals: true },
	/* tsconfig.compilerOptions: "types": [
      "vitest/globals"
    ], */
})
