import {arrayReject, arrayUnique, arrayUniqueInsensitive} from '../src'

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
	it('arrayReject(arr, callback) should return opposite of callback', () => {
		const arr = [...mock_array_numbers]

		/* eslint-disable unicorn/consistent-function-scoping */
		const callback = (...args: any[]) => args[0] > 5
		expect(arrayReject(arr, callback)).toEqual([
			1,
			2,
			3,
			4,
			5
		])
	})

	it('arrayUnique(arr) should return unique values (case sensitive)', () => {
		const arr_upper = mock_array_strings.map(str => str.toUpperCase())
		const arr = [
			...mock_array_strings,
			...arr_upper,
			...mock_array_strings
		]
		expect(arrayUnique(arr)).toEqual([...mock_array_strings, ...arr_upper])
	})

	it('arrayUniqueInsensitive(arr) should return unique values (case insensitive)', () => {
		const arr_upper = mock_array_strings.map(str => str.toUpperCase())
		const arr = [
			...mock_array_strings,
			...arr_upper,
			...mock_array_strings
		]
		expect(arrayUniqueInsensitive(arr)).toEqual(mock_array_strings)
	})
})
