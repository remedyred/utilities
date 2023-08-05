import {defineConfig} from 'tsup'
// @ts-expect-error
import indexer from '@snickbit/indexer/esbuild'

export default defineConfig({
	entry: [
		"src/index.ts"
	],
	clean: true,
	dts: true,
	format: [
		"esm",
		"cjs"
	],
	esbuildPlugins: [indexer()]
})
