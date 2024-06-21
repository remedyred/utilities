import {overloadOptions, OverloadSchema, parseOptions} from './index'

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
