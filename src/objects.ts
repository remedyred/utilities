import {JSONParse, JSONStringify} from './parsing'
import {isFunction, isObject} from './validations'
import {mergeDeep, typeOf} from './variables'

/** @category Objects */
export type IObject = Record<string | symbol, any>

/** @category Objects */
export type ObjectPredicate<T = any> = (key: string | symbol, value?: T, obj?: object) => unknown

/**
 * Finds an object property's name that matches the given predicate
 * @category Objects
 */
export function objectFindKey<I extends object = IObject>(obj: I, predicate: ObjectPredicate | string | symbol): string | symbol | undefined {
	const results = objectFindEntry(obj, predicate)
	return results ? results[0] : undefined
}

/**
 * Finds an object property's value that matches the given predicate
 * @param {object} obj
 * @param {string|function} [predicate] - A string or function that returns a boolean
 * @returns {any}
 * @category Objects
 */
export function objectFind<T = any, I extends object = IObject>(obj: I, predicate: ObjectPredicate | string | symbol): T | undefined {
	const results = objectFindEntry<T, I>(obj, predicate)
	return results ? results[1] : undefined
}

/**
 * Finds an object property's entry [key, value] that matches the given predicate
 * @category Objects
 */
export function objectFindEntry<T = any, I extends object = IObject>(obj: I, predicate: ObjectPredicate | string | symbol): [string, T] | undefined {
	if (!isFunction(predicate)) {
		const value = predicate
		predicate = (v: any) => v === value
	}

	return Object.entries(obj).find(([k, v]) => (predicate as ObjectPredicate)(k, v, obj))
}

/**
 * Checks if an object has a method with the given name
 * @category Objects
 */
export function objectHasMethod<I extends object = IObject>(obj: I, method: string, strict?: boolean): boolean {
	return !!objectGetMethod(obj, method, strict)
}

/**
 * Checks if an object has a method with the given name, and returns the method
 * @category Objects
 */
export function objectGetMethod<T = any, I extends object = IObject>(obj: I, method: string, strict?: boolean): T | undefined {
	if (!obj || !isObject(obj)) {
		return undefined
	}
	if (typeOf(method) !== 'string') {
		throw new Error(`Method name must be a string, got ${typeOf(method)}`)
	}
	return objectMethods<I>(obj)
		.map(method_name => ({original: method_name, lower: method_name.toLowerCase()}))
		.filter(method_def => strict ? method_def.original === method : method_def.lower === method.toLowerCase())
		.map(method_def => obj[method_def.original])
		.pop()
}

/**
 * Filter an object by a given predicate
 * @category Objects
 */
export function objectFilter<
	I extends object = IObject,
	R = Partial<I>
	>(obj: I, predicate: ObjectPredicate = () => true): R {
	if (!isObject(obj)) {
		throw new TypeError('objectFilter: obj must be an object')
	}
	if (!isFunction(predicate)) {
		throw new TypeError('objectFilter: predicate must be a function')
	}

	const toReturn = {} as R

	for (const key of Object.keys(obj)) {
		const value = obj[key]
		if ((predicate as ObjectPredicate)(key, value, obj)) {
			toReturn[key] = value
		}
	}

	return toReturn
}

/**
 * Returns a new object with only the allowed properties.
 * @category Objects
 */
export function objectOnly<I extends object = IObject>(obj: I, allowed: string[]): I {
	const toReturn = {} as I

	for (const key of allowed) {
		if (obj[key]) {
			toReturn[key] = obj[key]
		}
	}

	return toReturn
}

/**
 * Returns a new object without the excluded properties.
 * @param obj - the object to filter
 * @param {array} excluded - the allowed properties
 * @returns {object}
 * @category Objects
 */
export function objectExcept<I extends object = IObject>(obj: I, excluded: string[]): I {
	const toReturn = {} as I

	for (const key of Object.keys(obj)) {
		if (!excluded.includes(key)) {
			toReturn[key] = obj[key]
		}
	}

	return toReturn
}

/**
 * Flattens an object into a single level using dot notation for nested properties.
 * @category Objects
 */
export function objectFlatten<I extends object = IObject>(obj: I, prefix = ''): I {
	const toReturn = {} as I
	for (const [key, value] of Object.entries(obj)) {
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
	for (const obj of objects) {
		for (const [key, value] of Object.entries(obj)) {
			toReturn[key] = typeOf(value) === 'object' ? objectClone<I>(value) : value
		}
	}
	return toReturn
}

/**
 * Copy object as JSON (uses JSON.parse/JSON.stringify but won't throw any errors)
 * @category Objects
 */
export function objectCopy<I extends object = IObject>(obj: I, force?: boolean): I | undefined {
	const stringified = JSONStringify(obj, force) || '{}'
	return JSONParse<I>(stringified) as I
}

/**
 * Merge two or more objects together
 * @category Objects
 */
export function objectMerge<I extends object = IObject>(...objects: IObject[]): I {
	let toReturn = {} as I
	for (const obj of objects) {
		if (obj && typeOf(obj) === 'object') {
			toReturn = {...toReturn, ...obj}
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
	for (const obj of objects) {
		keys.push(...Object.keys(obj))
	}

	for (const obj of objects) {
		for (const key of keys) {
			toReturn[key] = mergeDeep(toReturn[key], obj[key])
		}
	}
	return toReturn
}

/**
 * Returns an array of the given object's available method names
 * @category Objects
 */
export function objectMethods<I extends object = IObject>(obj: I): string[] {
	const properties = new Set<string>()
	let currentObj = obj
	do {
		Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
		// eslint-disable-next-line no-cond-assign
	} while (currentObj = Object.getPrototypeOf(currentObj))

	const keys: string[] = Array.from(properties.keys()).map(item => item.toString())

	const rawObjectProperties = Object.getOwnPropertyNames(Object.prototype).filter(prop => Object.prototype[prop] && isFunction(Object.prototype[prop]))

	return keys.filter((item: string) => obj[item] && isFunction(obj[item]) && !rawObjectProperties.includes(item))
}

/**
 * Remove a property from an object and return the value
 * @category Objects
 */
export function objectPull<I extends object = IObject>(obj: I, key: string): any {
	if (!obj || !key || !isObject(obj) || !(key in obj)) {
		return undefined
	}
	const value = obj[key]
	delete obj[key]
	return value
}
