/* eslint-disable unicorn/prefer-export-from */

import {default as justCamelCase} from 'just-camel-case'
import reserved from './data/reserved'

/**
 * @internal
 * @category Strings
 */
export const capital_plus_lower = /[A-Z\u00C0-Ý][a-zà-ÿ]/g

/**
 * @internal
 * @category Strings
 */
export const capitals = /[A-Z\u00C0-Ý]+/g

/**
 * Convert a string to snake_case
 * @category Strings
 */
export function snakeCase(text: string) {
	return slugify(text, '_')
}

/**
 * Convert a string to kebab-case
 * @category Strings
 */
export function kebabCase(text: string) {
	return slugify(text)
}

/**
 * Convert a string to camelCase
 *
 * @see https://www.npmjs.com/package/just-camel-case
 * @category Strings
 */
export function camelCase(text: string): string {
	return justCamelCase(text)
}

/**
 * Convert a string to initials
 * @category Strings
 */
export function initials(text: string): string {
	return text
		.split(/[^A-Za-z]/)
		.filter(Boolean)
		.map(word => word[0].toUpperCase())
		.join('')
}

/**
 * Limit a string to a certain length
 * @category Strings
 */
export function limitString(text: string, limit = 100, suffix = '...'): string {
	return text.length > limit ? text.slice(0, Math.max(0, limit)) + suffix : text
}

/**
 * Limit a string to a certain amount of words
 * @category Strings
 */
export function limitWords(text: string, limit = 100, suffix = '...'): string {
	const words = text.split(/\s+/)
	return words.length > limit ? words.slice(0, limit).join(' ') + suffix : text
}

/**
 * Pad a string on both sides with the given character and length
 * @category Strings
 */
export function padString(text: string, padding = 2, character = ' '): string {
	const pad = !Number.isNaN(padding) && padding > 0 ? character.repeat(padding) : ''
	return pad + text + pad
}

/**
 * Create a safe javascript variable name from a string
 * @category Strings
 */
export function safeVarName(text: string, replacer = ''): string {
	// check that replacer itself is valid
	replacer = replacer.split(/[\W_]/).join('')

	text = text.split(/[\W_]/) // Split on non-word characters
		.join(replacer) // Join words with replacer
		.replaceAll(new RegExp(replacer + replacer, 'g'), replacer) // Replace double replacer with single replacer

	// If the first character is a number or if full text is a reserved word, add a replacer in front
	if (/^\d/.test(text) || reserved.includes(text)) {
		// if replacer is empty, use an underscore
		text = (replacer || '_') + text
	}

	return text
}

/**
 * Convert a string to space-case
 * @category Strings
 */
export function spaceCase(text: string): string {
	// force the variable to be a string
	text = String(text)
	// treat cap + lower as the start of new word
	text = text.replaceAll(capital_plus_lower, match => ` ${match[0].toLowerCase() || match[0]}${match[1]}`) // the match is one cap followed by one non-cap
	// treat all remaining capitals as words
	text = text.replaceAll(capitals, match => ` ${match.toLowerCase()}`) // match is a series of caps
	return text.trim() // trim leading and trailing spaces
}

/**
 * Create slug from string
 * @category Strings
 */
export function slugify(text: string, replace = '-'): string {
	return spaceCase(text)
		.toLowerCase()
		.replaceAll(/\s+/g, replace) // Replace spaces with -
		.replaceAll(/[^\w-]+/g, replace) // Remove all non-word chars
		.replaceAll(new RegExp(`${replace}${replace}+`, 'g'), replace) // Replace - with a single -
		.replace(new RegExp(`^${replace}+`), '') // Trim - from start of text
		.replace(new RegExp(`${replace}+$`), '') // Trim - from end of text
}

/**
 * Return the index of the first difference between two strings
 * @category Strings
 */
export function findFirstDiff(first: string, second: string): number {
	let index = 0
	if (first === second) {
		return -1
	}
	while (first[index] === second[index]) {
		index++
	}
	return index
}

/**
 * Get the plural version of a word
 * @category Strings
 * @see @snickbit/plural
 * @deprecated Use @snickbit/plural instead, this will be removed in the next major version
 */
export {plural} from '@snickbit/plural'

/**
 * Get the singular version of a word
 * @category Strings
 * @see @snickbit/plural
 * @deprecated Use @snickbit/plural instead, this will be removed in the next major version
 */
export {singular} from '@snickbit/plural'

/**
 * Wrap a string at a certain character length. Optionally add padding to each line
 * @category Strings
 */
export function wordWrap(text: string, characters: number, padding?: number): string {
	const lines: string[] = []
	const words = text.split(/\s+/)
	let line = ''
	for (const word of words) {
		if (line.length + word.length + 1 > characters) {
			lines.push(line)
			line = ''
		}
		line += `${word} `
	}
	if (line) {
		lines.push(line)
	}
	return lines.map(line => padString(line, padding)).join('\n')
}

/**
 * Compare two strings using a "natural order" algorithm
 * @category Strings
 */
export function naturalSort(str1: string, str2: string, caseSensitive = false): number {
	const a = caseSensitive ? str1 : str1.toLowerCase()
	const b = caseSensitive ? str2 : str2.toLowerCase()

	const collator = new Intl.Collator(undefined, {
		numeric: true,
		sensitivity: 'base'
	})

	return collator.compare(a, b)
}

/**
 * Capitalize the first character of a string
 * @category Strings
 */
export function upperFirst(text: string, normalize = false) {
	if (normalize) {
		text = String(text).toLowerCase()
	}
	return String(text).charAt(0).toUpperCase() + text.slice(1)
}
