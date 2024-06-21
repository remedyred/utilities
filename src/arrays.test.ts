import {arrayPull, arrayReject, arrayUnique, arrayUniqueInsensitive} from './index'

const mock_array_numbers = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
]

const mock_array_strings = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten'
]

describe('arrays', () => {
	// Other tests...

	describe('arrayPull', () => {
		it('arrayPull(arr, index, length) should return a new array with elements starting at given index for provided length', () => {
			const arr = [...mock_array_numbers]

			expect(arrayPull(arr, 5, 3)).toStrictEqual([
				6,
				7,
				8
			])
		})

		it('arrayPull(arr, index) without length should return a new array with elements starting at given index till the end', () => {
			const arr = [...mock_array_numbers]

			expect(arrayPull(arr, 5)).toStrictEqual([
				6,
				7,
				8,
				9,
				10
			])
		})

		it('arrayPull(arr, index, length) should not mutate the original array', () => {
			const arr = [...mock_array_numbers]
			const pulledArray = arrayPull(arr, 5, 3)

			expect(arr).toStrictEqual(mock_array_numbers)
			expect(pulledArray).not.toBe(arr)
		})
	})

	describe('arrayReject', () => {
		it('arrayReject(arr, callback) should return opposite of callback', () => {
			const arr = [...mock_array_numbers]

			/* eslint-disable unicorn/consistent-function-scoping */
			const callback = (...args: any[]) => args[0] > 5
			expect(arrayReject(arr, callback)).toStrictEqual([
				1,
				2,
				3,
				4,
				5
			])
		})
	})

	describe('arrayUnique', () => {
		it('arrayUnique(arr) should return unique values (case sensitive)', () => {
			const arr_upper = mock_array_strings.map(str => str.toUpperCase())
			const arr = [
				...mock_array_strings,
				...arr_upper,
				...mock_array_strings
			]
			expect(arrayUnique(arr)).toStrictEqual([...mock_array_strings, ...arr_upper])
		})
	})

	describe('arrayUniqueInsensitive', () => {
		it('arrayUniqueInsensitive(arr) should return unique values (case insensitive)', () => {
			const arr_upper = mock_array_strings.map(str => str.toUpperCase())
			const arr = [
				...mock_array_strings,
				...arr_upper,
				...mock_array_strings
			]
			expect(arrayUniqueInsensitive(arr)).toStrictEqual(mock_array_strings)
		})
	})
})
