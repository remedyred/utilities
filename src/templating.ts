import {objectFlatten} from './objects'

/**
 * escape regexp
 * @param text
 * @returns {any}
 * @category Templating
 */
export const escapeRegExp = (text: string) => String(text).replace(/[$()*+.?[\\\]^{|}]/g, '\\$&')

/**
 * escape regexp replacement string
 * @param text
 * @returns {any}
 * @category Templating
 */
export const escapeReplacement = (text: string) => String(text).replace(/\$/g, '$$$$')

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
			text = text.replace(new RegExp(escapeRegExp(`{{${from}}}`), 'g'), to)
		}
		if (!from.startsWith('${')) {
			text = text.replace(new RegExp(escapeRegExp(`\${${from}}`), 'g'), to)
		}
	}
	return text
}
