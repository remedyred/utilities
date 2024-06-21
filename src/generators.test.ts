import {randomString} from './index'

test('randomString should return a random 10 character string', () => {
	const result = randomString(10)
	expect(result).toHaveLength(10)
})

test('randomString should return a random 32 character  string', () => {
	const result = randomString(32)
	expect(result).toHaveLength(32)
})
