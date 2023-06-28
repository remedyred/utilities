import {isFunction} from './validations'
import {mergeDeep, typeOf} from './variables'

/** @category Arrays */
export type ArrayPredicate = <T = any>(value: T, index?: number, array?: T[]) => T

/**
 * Checks if the given array only contains a single value, optionally pass a value or predicate to check against
 * @category Arrays
 */
export function isSingle<T = any>(array: T[], value?: T): boolean
export function isSingle<T = any>(array: T[], predicate?: ArrayPredicate): boolean {
	if (array.length !== 1) {
		return false
	}

	return !predicate || (isFunction(predicate) ? !!(predicate as ArrayPredicate)(array[0], 0, array) : array.includes(predicate))
}

/**
 * Returns unique values from an array. Optionally pass a key when the array is an object array.
 * @category Arrays
 */
export function arrayUnique<T = any>(array: T[], key?: string): T[] {
	return [...new Set(array.map(item => key ? item[key] : item))]
}

/**
 * Returns unique values from an array, ignoring case. Optionally pass a key when the array is an object array.
 * @category Arrays
 */
export function arrayUniqueInsensitive<T = any>(array: T[], key?: string): T[] {
	return [
		...new Set(array.map(item => {
			let selectedItem = item
			if (key) {
				const itemWithLowercaseKeys = Object.fromEntries(Object.entries(item).map(([key, value]) => [key.toLowerCase(), value]))
				selectedItem = itemWithLowercaseKeys[String(key).toLowerCase()]
			}
			return typeof selectedItem === 'string' ? selectedItem.toLowerCase() as T : selectedItem
		}))
	]
}

/**
 * Convert an array to an object using the given key as the property
 * @category Arrays
 *
 * @example
 * arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'id', 'name')
 * // {1: 'John', 2: 'Jane'}
 * @example
 * arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'name')
 * // {John: {id: 1, name: 'John'}, Jane: {id: 2, name: 'Jane'}}
 */
export const arrayToObject = <T = any, V = T>(array: T[], key: keyof T, value: keyof T): Record<string, V> => {
	return Object.fromEntries(array.map(item => [
		// eslint-disable-next-line array-element-newline
		item[key], // set new object key
		value ? item[value] : item // set new object value
	]))
}

/**
 * Wrap a variable in an array if it is not already an array
 * @category Arrays
 */
export const arrayWrap = <T = any>(values: T | T[]): T[] => Array.isArray(values) ? values : [values]

/**
 * Return the duplicate values from an array
 * @category Arrays
 */
export function arrayDuplicates<T = any>(array: T[], predicate?: ArrayPredicate): T[] {
	const unique: T[] = [],
		duplicates: T[] = []
	predicate ||= (value => value)
	for (const item of array) {
		const processedItem = predicate<T>(item)
		if (unique.includes(processedItem)) {
			duplicates.push(item)
		} else {
			unique.push(processedItem)
		}
	}
	return duplicates
}

/**
 * Finds and returns an element from an array, removing it in the process
 * @category Arrays
 */
export function arrayRemove<T = any>(array: T[], value: T): T[] {
	if (!array || !value) {
		return array
	}
	const index = array.indexOf(value)
	if (index >= 0) {
		array.splice(index, 1)
	}
	return array
}

/**
 * Shuffles/randomizes an array
 * @category Arrays
 */
export function arrayShuffle<T = any>(array: T[]): T[] {
	let currentIndex = array.length,
		randomIndex

	// While there remain elements to shuffle.
	while (currentIndex !== 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
	}

	return array
}

/**
 * Merge two or more arrays together
 * @category Arrays
 */
export function arrayMerge(...arrs: any[][]): any[] {
	let toReturn: any[] = []
	for (const array of arrs) {
		if (array && typeOf(array) === 'array') {
			toReturn = [...toReturn, ...array]
		}
	}
	return toReturn
}

/**
 * Merge two or more arrays together, recursing child values
 * @category Arrays
 */
export function arrayMergeDeep(...arrs: any[][]): any[] {
	const toReturn: any[] = []
	for (const array of arrs) {
		for (const [key, value] of array.entries()) {
			toReturn[key] = mergeDeep(toReturn[key], value)
		}
	}
	return toReturn
}

/**
 * Get the reverse of a filtered array
 * @category Arrays
 */
export function arrayReject<T = any>(array: T[], callback: (...args: any[]) => boolean): T[] {
	return array.filter((...args: any[]) => !callback.apply(array, args))
}

/**
 * Turn an array of two value arrays into an object of key/value pairs
 * @category Arrays
 */
export function arrayToKeyValue<TValue = any>(array: [number | string | symbol, TValue][]): {[key: string]: TValue} {
	const result: {[key: string]: any} = {}
	for (const [key, value] of array) {
		result[String(key)] = value
	}
	return result
}

