import {memoize, overloadOptions, OverloadSchema, parseOptions} from './index'

describe('parseOptions', () => {
	it('parseOptions({test: true, two: false}, {test: false, other: false}) should return {test: true, other: false, two: false}', () => {
		const test_object = {
			test: true,
			two: false
		}
		const default_object = {
			test: false,
			other: false
		}
		const expected_object = {
			test: true,
			other: false,
			two: false
		}
		expect(parseOptions(test_object, default_object)).toStrictEqual(expected_object)
	})

	it('parseOptions(true, {test: false, other: false}, "test") should return {test: true, other: false}', () => {
		const test_object = true
		const default_object = {
			test: false,
			other: false
		}
		const expected_object = {
			test: true,
			other: false
		}
		expect(parseOptions(test_object, default_object, 'test')).toStrictEqual(expected_object)
	})

	it('parseOptions(undefined, true) should return throw a TypeError', () => {
		const test_object = undefined
		const default_object = true
		// @ts-expect-error
		expect(() => parseOptions(test_object, default_object)).toThrow(TypeError)
	})

	it('parseOptions({test: undefined, two: false}, {test: false, other: false}) should return {test: false, other: false, two: false}', () => {
		const test_object = {
			test: undefined,
			two: false
		}
		const default_object = {
			test: false,
			other: false
		}
		const expected_object = {
			test: false,
			other: false,
			two: false
		}
		expect(parseOptions(test_object, default_object)).toStrictEqual(expected_object)
	})
})

describe('overloadOptions', () => {
	const baseChannel = 'test'
	const baseContext = {
		test: false,
		other: false
	}
	const baseConfig = {
		test: true,
		other: false,
		two: false
	}
	const baseSchemas: OverloadSchema[] = [
		{
			channel: 'string',
			context: 'object',
			config: 'object'
		},
		{
			context: 'object',
			config: 'object'
		}
	]

	const baseExpected = {
		channel: 'test',
		context: {
			test: false,
			other: false
		},
		config: {
			test: true,
			other: false,
			two: false
		}
	}

	it('overloadOptions("test", {}, {}) = {channel: "test", context: {}, config: {}}', () => {
		expect(overloadOptions([
			baseChannel,
			baseContext,
			baseConfig
		], baseSchemas)).toStrictEqual(baseExpected)
	})

	it('overloadOptions({}, {}) = {context: {}, config: {}}', () => {
		const expected = {
			context: baseExpected.context,
			config: baseExpected.config
		}
		expect(overloadOptions([baseContext, baseConfig], baseSchemas)).toStrictEqual(expected)
	})

	it('overloadOptions("test", {}) = {channel: "test", context: {}, config: undefined}', () => {
		const expected = {
			channel: baseExpected.channel,
			context: baseExpected.context
		}
		expect(overloadOptions([baseChannel, baseContext], baseSchemas)).toStrictEqual(expected)
	})
})

describe('memoize improvements', () => {
	let fn: jest.Mock
	let memoized: (...args: any[]) => any

	beforeEach(() => {
		fn = jest.fn((x?: number, y?: number, z?: number) => (x || 0) + (y || 0) + (z || 0))
		memoized = memoize(fn)
	})

	it('should cache result when called with no parameters', () => {
		expect(memoized()).toBe(0)
		expect(memoized()).toBe(0)
		expect(fn).toHaveBeenCalledTimes(1)
	})

	it('should cache result for same primitive arguments', () => {
		expect(memoized(1, 2)).toBe(3)
		expect(memoized(1, 2)).toBe(3)
		expect(fn).toHaveBeenCalledTimes(1)
	})

	it('should cache result for the same object reference', () => {
		const obj = {a: 1}
		const fnObj = jest.fn((o: object) => o)
		const memoizedObj = memoize(fnObj)
		const res1 = memoizedObj(obj)
		const res2 = memoizedObj(obj)
		expect(res1).toBe(obj)
		expect(res2).toBe(obj)
		expect(fnObj).toHaveBeenCalledTimes(1)
	})

	it('should not cache result for different object references with identical structure', () => {
		const fnObj = jest.fn((o: object) => o)
		const memoizedObj = memoize(fnObj)
		const res1 = memoizedObj({a: 1})
		const res2 = memoizedObj({a: 1})
		expect(res1).not.toBe(res2)
		expect(fnObj).toHaveBeenCalledTimes(2)
	})

	it('should cache result for multiple parameters', () => {
		expect(memoized(1, 2, 3)).toBe(6)
		expect(memoized(1, 2, 3)).toBe(6)
		expect(fn).toHaveBeenCalledTimes(1)
	})

	it('should preserve "this" context', () => {
		const obj = {
			multiplier: 10,
			multiply(x: number) {
				return x * this.multiplier
			}
		}
		// Memoize the method while preserving its context.
		obj.multiply = memoize(obj.multiply)
		expect(obj.multiply(2)).toBe(20)
	})

	it('should memoize asynchronous functions', async () => {
		let count = 0
		const asyncFn = jest.fn(async (x: number) => {
			count++
			return x * 2
		})
		const memoizedAsync = memoize(asyncFn)
		const result1 = await memoizedAsync(5)
		const result2 = await memoizedAsync(5)
		expect(result1).toBe(10)
		expect(result2).toBe(10)
		expect(asyncFn).toHaveBeenCalledTimes(1)
		expect(count).toBe(1)
	})

	it(`shouldn't cache errors`, () => {
		let callCount = 0
		const errorFn = jest.fn((x: number) => {
			callCount++
			if (x === 0) {
				throw new Error(`Zero's aren't allowed`)
			}
			return x
		})
		const memoizedError = memoize(errorFn)
		expect(() => memoizedError(0)).toThrow(`Zero's aren't allowed`)
		expect(() => memoizedError(0)).toThrow(`Zero's aren't allowed`)
		expect(callCount).toBe(2)
	})

	it('should treat different argument orders as separate calls', () => {
		// Using a function that returns the argument array to differentiate order.
		const arrayFn = jest.fn((...args: any[]) => args)
		const memoizedArray = memoize(arrayFn)
		const a1 = memoizedArray(1, 2)
		const a2 = memoizedArray(2, 1)
		expect(a1).not.toEqual(a2)
		expect(arrayFn).toHaveBeenCalledTimes(2)
	})

	it('should return the cached result even if the object is mutated', () => {
		const mutable = {value: 5}
		const fnMutable = jest.fn((obj: {value: number}) => obj.value)
		const memoizedMutable = memoize(fnMutable)
		const result1 = memoizedMutable(mutable)
		mutable.value = 10
		const result2 = memoizedMutable(mutable)
		// The cache was set with the object reference, so the returned value is the cached one.
		expect(result1).toBe(5)
		expect(result2).toBe(5)
		expect(fnMutable).toHaveBeenCalledTimes(1)
	})
})

