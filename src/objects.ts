import {JSONParse, JSONStringify} from './parsing'
import {isFunction, isObject} from './validations'
import {mergeDeep, typeOf} from './variables'

/** @category Objects */
export type IObject = Record<string | symbol, any>

/** @category Objects */
export type ObjectPredicate<T = any, K = string, O extends object = any> = (key: K, value?: T, object?: O) => unknown

/**
 * Finds an object property's name that matches the given predicate
 * @category Objects
 */
export function objectFindKey<I extends object = IObject>(object: I, predicate: ObjectPredicate | string | symbol): string | symbol | undefined {
	const results = objectFindEntry(object, predicate)
	return results ? results[0] : undefined
}

/**
 * Finds an object property's value that matches the given predicate
 * @param {object} object
 * @param {string|function} [predicate] - A string or function that returns a boolean
 * @returns {any}
 * @category Objects
 */
export function objectFind<T = any, I extends object = IObject>(object: I, predicate: ObjectPredicate | string | symbol): T | undefined {
	const results = objectFindEntry<T, I>(object, predicate)
	return results ? results[1] : undefined
}

/**
 * Finds an object property's entry [key, value] that matches the given predicate
 * @category Objects
 */
export function objectFindEntry<T = any, I extends object = IObject>(object: I, predicate: ObjectPredicate | string | symbol): [string, T] | undefined {
	if (!isFunction(predicate)) {
		const value = predicate
		predicate = (v: any) => v === value
	}

	return Object.entries(object).find(([k, v]) => (predicate as ObjectPredicate)(k, v, object))
}

/**
 * Checks if an object has a method with the given name
 * @category Objects
 */
export function objectHasMethod<I extends object = IObject>(object: I, method: string, strict?: boolean): boolean {
	return !!objectGetMethod(object, method, strict)
}

/**
 * Checks if an object has a method with the given name, and returns the method
 * @category Objects
 */
export function objectGetMethod<T = any, I extends object = IObject>(object: I, method: string, strict?: boolean): T | undefined {
	if (!object || !isObject(object)) {
		return undefined
	}
	if (typeOf(method) !== 'string') {
		throw new Error(`Method name must be a string, got ${typeOf(method)}`)
	}
	return objectMethods<I>(object)
		.map(method_name => ({original: method_name, lower: method_name.toLowerCase()}))
		.filter(method_def => strict ? method_def.original === method : method_def.lower === method.toLowerCase())
		.map(method_def => object[method_def.original])
		.pop()
}

/**
 * Filter an object by a given predicate
 * @category Objects
 */
export function objectFilter<
	I extends object = IObject,
	R = Partial<I>
	>(object: I, predicate: ObjectPredicate = () => true): R {
	if (!isObject(object)) {
		throw new TypeError('objectFilter: object must be an object')
	}
	if (!isFunction(predicate)) {
		throw new TypeError('objectFilter: predicate must be a function')
	}

	const toReturn = {} as R

	for (const key of Object.keys(object)) {
		const value = object[key]
		if ((predicate as ObjectPredicate)(key, value, object)) {
			toReturn[key] = value
		}
	}

	return toReturn
}

/**
 * Returns a new object with only the allowed properties.
 * @category Objects
 */
export function objectOnly<I extends object = IObject>(object: I, allowed: string[]): I {
	const toReturn = {} as I

	for (const key of allowed) {
		if (object[key]) {
			toReturn[key] = object[key]
		}
	}

	return toReturn
}

/**
 * Returns a new object without the excluded properties.
 * @param object - the object to filter
 * @param {array} excluded - the allowed properties
 * @returns {object}
 * @category Objects
 */
export function objectExcept<I extends object = IObject>(object: I, excluded: string[]): I {
	const toReturn = {} as I

	for (const key of Object.keys(object)) {
		if (!excluded.includes(key)) {
			toReturn[key] = object[key]
		}
	}

	return toReturn
}

/**
 * Flattens an object into a single level using dot notation for nested properties.
 * @category Objects
 */
export function objectFlatten<I extends object = IObject>(object: I, prefix = ''): I {
	const toReturn = {} as I
	for (const [key, value] of Object.entries(object)) {
		if (isObject(value)) {
			Object.assign(toReturn, objectFlatten<I>(value, `${prefix}${key}.`))
		} else {
			toReturn[`${prefix}${key}`] = value
		}
	}
	return toReturn
}

/**
 * Deep clones an object
 * @category Objects
 */
export function objectClone<I extends object = IObject>(...objects: IObject[]): I {
	const toReturn = {} as I
	for (const object of objects) {
		for (const [key, value] of Object.entries(object)) {
			toReturn[key] = typeOf(value) === 'object' ? objectClone<I>(value) : value
		}
	}
	return toReturn
}

/**
 * Copy object as JSON (uses JSON.parse/JSON.stringify but won't throw any errors)
 * @category Objects
 */
export function objectCopy<I extends object = IObject>(object: I, force?: boolean): I {
	const stringified = JSONStringify(object, force) || '{}'
	return JSONParse<I>(stringified) as I
}

/**
 * Merge two or more objects together
 * @category Objects
 */
export function objectMerge<I extends object = IObject>(...objects: IObject[]): I {
	let toReturn = {} as I
	for (const object of objects) {
		if (object && typeOf(object) === 'object') {
			toReturn = {...toReturn, ...object}
		}
	}
	return toReturn
}

/**
 * Merge two or more objects together, recursing child values
 * @category Objects
 */
export function objectMergeDeep<I extends object = IObject>(...objects: IObject[]): I {
	const toReturn = {} as I
	const keys: string[] = []
	for (const object of objects) {
		keys.push(...Object.keys(object))
	}

	for (const object of objects) {
		for (const key of keys) {
			toReturn[key] = mergeDeep(toReturn[key], object[key])
		}
	}
	return toReturn
}

/**
 * Returns an array of the given object's available method names
 * @category Objects
 */
export function objectMethods<I extends object = IObject>(object: I): string[] {
	const properties = new Set<string>()
	let currentObject = object
	do {
		Object.getOwnPropertyNames(currentObject).map(item => properties.add(item))
		// eslint-disable-next-line no-cond-assign
	} while (currentObject = Object.getPrototypeOf(currentObject))

	const keys: string[] = [...properties.keys()].map(item => item.toString())

	const rawObjectProperties = new Set(Object.getOwnPropertyNames(Object.prototype).filter(property => Object.prototype[property] && isFunction(Object.prototype[property])))

	return keys.filter((item: string) => object[item] && isFunction(object[item]) && !rawObjectProperties.has(item))
}

/**
 * Remove a property from an object and return the value
 * @category Objects
 */
export function objectPull<I extends object = IObject>(object: I, key: string): any {
	if (!object || !key || !isObject(object) || !(key in object)) {
		return undefined
	}
	const value = object[key]
	delete object[key]
	return value
}

/**
 * Sort an object by it's keys
 * @category Objects
 */
export function objectSort<I extends object = IObject>(object: I): I

/**
 * Sort an object by a predicate
 * @category Objects
 */
export function objectSort<I extends object = IObject>(object: I, sortFunction: (a: [string, unknown], b: [string, unknown]) => number): I
export function objectSort<I extends object = IObject>(object: I, sortFunction?: (a: [string, unknown], b: [string, unknown]) => number): I {
	const toReturn = {} as I
	const keys = sortFunction
		? Object.entries(object).sort((a, b) => sortFunction(a, b)).map(item => item[0])
		: Object.keys(object).sort()
	for (const key of keys) {
		toReturn[key] = object[key]
	}
	return toReturn
}

/**
 * Shallow merges multiple objects together, overwriting earlier objects' values with later objects' values.
 * Null and undefined values from later objects are ignored, and not copied over.
 * @category Objects
 */
export function objectOverwrite<I extends object = IObject>(object: I, ...objects: IObject[]): I {
	for (const objectToMerge of objects) {
		for (const [key, value] of Object.entries(objectToMerge)) {
			if (value !== undefined && value !== null) {
				object[key] = value
			}
		}
	}
	return object
}
