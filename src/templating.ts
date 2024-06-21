import {objectFlatten} from './objects'

/**
 * escape regexp
 * @category Templating
 */
export function escapeRegExp(text: string) {
	return String(text).replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&')
}

/**
 * escape regexp replacement string
 * @category Templating
 */
export function escapeReplacement(text: string) {
	return String(text).replaceAll('$', '$$$$')
}

/** @category Templating */
export type interpolateReplacements = Record<string, any | number | string>

/**
 * interpolate string with data from object using `{{key}}` syntax or `${key}` syntax
 * @category Templating
 */
export function interpolate(text: string, replacements: interpolateReplacements): string {
	// eslint-disable-next-line prefer-const
	for (let [from, to] of Object.entries(objectFlatten(replacements))) {
		to = escapeReplacement(to)
		if (!from.startsWith('{{')) {
			text = text.replaceAll(new RegExp(escapeRegExp(`{{${from}}}`), 'g'), to)
		}
		if (!from.startsWith('${')) {
			text = text.replaceAll(new RegExp(escapeRegExp(`\${${from}}`), 'g'), to)
		}
	}
	return text
}
