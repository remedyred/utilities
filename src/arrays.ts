import {isFunction} from './validations'
import {mergeDeep, typeOf} from './variables'

/** @category Arrays */
export type ArrayPredicate = (value: any, index?: number, array?: any[]) => unknown

/**
 * Checks if the given array only contains a single value, optionally pass a value or predicate to check against
 * @category Arrays
 */
export function isSingle(array: any[], value?: any): boolean
export function isSingle(array: any[], predicate?: ArrayPredicate): boolean {
	if (array.length !== 1) {
		return false
	}

	return !predicate || (isFunction(predicate) ? !!(predicate as ArrayPredicate)(array[0], 0, array) : array.includes(predicate))
}

/**
 * Returns unique values from an array. Optionally pass a key when the array is an object array.
 * @category Arrays
 */
export const arrayUnique = (array: any[], key?: string): any[] => array.filter((value, index, self) => (key ? self.findIndex(item => item[key] === value[key]) : self.indexOf(value)) === index)

/**
 * Returns unique values from an array, ignoring case. Optionally pass a key when the array is an object array.
 * @category Arrays
 */
export const arrayUniqueInsensitive = (array: any[], key?: string): any[] => array.filter((value, index, self) => (key ? self.findIndex(item => item[key].toLowerCase() === value[key].toLowerCase()) : self.findIndex(item => item.toLowerCase() === value.toLowerCase())) === index)

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
export const arrayToObject = (array: any[], key: number | string, value: number | string): object => Object.fromEntries(array.map(item => [item[key], value ? item[value] : item]))

/**
 * Wrap a variable in an array if it is not already an array
 * @category Arrays
 */
export const arrayWrap = (values: any[] | any): any[] => Array.isArray(values) ? values : [values]

/**
 * Return the duplicate values from an array
 * @category Arrays
 */
export function arrayDuplicates(array: any[], predicate?: ArrayPredicate): any[] {
	const unique: any[] = [],
		duplicates: any[] = []
	predicate = predicate || (value => value)
	for (const item of array) {
		if (unique.includes(predicate(item))) {
			duplicates.push(item)
		} else {
			unique.push(predicate(item))
		}
	}
	return duplicates
}

/**
 * Finds and returns an element from an array, removing it in the process
 * @category Arrays
 */
export function arrayRemove(array: any[], value: any): any[] {
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
export function arrayShuffle(array: any[]): any[] {
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
export function arrayReject(array: any[], callback: (...args: any[]) => boolean): any[] {
	return array.filter((...args: any[]) => !callback.apply(array, args))
}
