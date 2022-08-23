/* eslint-disable unicorn/prefer-export-from */

import {default as justCamelCase} from 'just-camel-case'
import reserved from './data/reserved'

/**
 * @internal
 * @category Parsing
 */
export const capital_plus_lower = /[A-Z\u00C0-Ý][a-zà-ÿ]/g

/**
 * @internal
 * @category Parsing
 */
export const capitals = /[A-Z\u00C0-Ý]+/g

/**
 * Convert a string to snake_case
 * @category Parsing
 */
export const snakeCase = (text: string) => slugify(text, '_')

/**
 * Convert a string to kebab-case
 *
 * @param text - The string to convert
 * @returns {string}
 * @category Parsing
 */
export const kebabCase = (text: string) => slugify(text)

/**
 * Convert a string to camelCase
 *
 * @see https://www.npmjs.com/package/just-camel-case
 * @category Parsing
 */
export const camelCase = (text: string): string => justCamelCase(text)

/**
 * Create a pluralized string
 * @category Parsing
 * @see @snickbit/plural
 */

/**
 * Create a singularized string
 * @category Parsing
 * @see @snickbit/plural
 */

/**
 * Convert a string to initials
 * @category Parsing
 */
export const initials = (text: string): string => text
	.split(/[^A-Za-z]/)
	.filter(Boolean)
	.map(word => word[0].toUpperCase())
	.join('')

/**
 * Limit a string to a certain length
 * @category Parsing
 */
export const limitString = (text: string, limit = 100, suffix = '...'): string => text.length > limit ? text.slice(0, Math.max(0, limit)) + suffix : text

/**
 * Limit a string to a certain amount of words
 * @category Parsing
 */
export function limitWords(text: string, limit = 100, suffix = '...'): string {
	const words = text.split(/\s+/)
	return words.length > limit ? words.slice(0, limit).join(' ') + suffix : text
}

/**
 * Pad a string on both sides with the given character and length
 * @category Parsing
 */
export function padString(text: string, padding = 2, character = ' '): string {
	const pad = !Number.isNaN(padding) && padding > 0 ? character.repeat(padding) : ''
	return pad + text + pad
}

/**
 * Create a safe javascript variable name from a string
 * @category Parsing
 */
export function safeVarName(text: string, replacer = ''): string {
	// check that replacer itself is valid
	replacer = replacer.split(/[\W_]/).join('')

	text = text.split(/[\W_]/) // Split on non-word characters
		.join(replacer) // Join words with replacer
		.replace(new RegExp(replacer + replacer, 'g'), replacer) // Replace double replacer with single replacer

	// If the first character is a number or if full text is a reserved word, add a replacer in front
	if (/^\d/.test(text) || reserved.includes(text)) {
		// if replacer is empty, use an underscore
		text = (replacer || '_') + text
	}

	return text
}

/**
 * Convert a string to space-case
 * @category Parsing
 */
export function spaceCase(text: string): string {
	// force the variable to be a string
	text = String(text)
	// treat cap + lower as the start of new word
	text = text.replace(capital_plus_lower, match => ` ${match[0].toLowerCase() || match[0]}${match[1]}`) // the match is one cap followed by one non-cap
	// treat all remaining capitals as words
	text = text.replace(capitals, match => ` ${match.toLowerCase()}`) // match is a series of caps
	return text.trim() // trim leading and trailing spaces
}

/**
 * Create slug from string
 * @category Parsing
 */
export function slugify(text: string, replace = '-'): string {
	return spaceCase(text)
		.toLowerCase()
		.replace(/\s+/g, replace) // Replace spaces with -
		.replace(/[^\w-]+/g, replace) // Remove all non-word chars
		.replace(new RegExp(`${replace}${replace}+`, 'g'), replace) // Replace - with a single -
		.replace(new RegExp(`^${replace}+`), '') // Trim - from start of text
		.replace(new RegExp(`${replace}+$`), '') // Trim - from end of text
}

/**
 * Return the index of the first difference between two strings
 * @param first
 * @param second
 * @returns {number} -1 if no difference
 */
export function findFirstDiff(first, second): number {
	let index = 0
	if (first === second) {
		return -1
	}
	while (first[index] === second[index]) {
		index++
	}
	return index
}

export {plural, singular} from '@snickbit/plural'
