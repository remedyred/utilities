import {nanoid} from 'nanoid'
import {IObject} from './objects'
import {clone} from './variables'

/**
 * Create uuid
 * @category Generators
 */
export function uuid(prefix = ''): string {
	return `${prefix}${nanoid()}`
}

/**
 * Generate a random string
 * @category Generators
 */
export function randomString(length = 10): string {
	let text = ''
	while (text.length < length) {
		text += makeRandomSegment()
	}
	return text.slice(0, Math.max(0, length))
}

/**
 * Generate a random string between 8 and 14 characters long
 * @category Generators
 */
export function makeRandomSegment(): string {
	return Math.random().toString(36).slice(2, 16)
}

/** @category Generators */
export type CombinationOptions = Record<string, any[]>

/**
 * Generate an array of all possible property values.
 * Provide an object with each property as a key and an array of possible values as the value.
 * @category Generators
 */
export function combinations(options: CombinationOptions): any[] {
	return combinationsLoop(options)
}

function combinationsLoop(options: CombinationOptions, optionIndex = 0, current: IObject = {}): any[] {
	const allKeys = Object.keys(options)
	const optionKey = allKeys[optionIndex]
	const values = options[optionKey]
	const results: any[] = []

	for (const value of values) {
		current[optionKey] = value

		if (optionIndex + 1 < allKeys.length) {
			results.push(...combinationsLoop(options, optionIndex + 1, current))
		} else {
			const res = clone(current)
			results.push(res)
		}
	}

	return results
}
