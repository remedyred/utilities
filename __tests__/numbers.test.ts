import {numberEven, numberOdd, numberPad} from '../src'

describe('numbers', () => {
	describe('numberPad', () => {
		it('(5) should return 05', () => {
			expect(numberPad(5)).toBe('05')
		})
		it('(5, 2) should return 05', () => {
			expect(numberPad(5, 2)).toBe('05')
		})

		it('(50, 2) should return 50', () => {
			expect(numberPad(50, 2)).toBe('50')
		})

		it('(500, 2) should return 500', () => {
			expect(numberPad(500, 2)).toBe('500')
		})

		it('(5, 3) should return 005', () => {
			expect(numberPad(5, 3)).toBe('005')
		})

		it('(50, 3) should return 050', () => {
			expect(numberPad(50, 3)).toBe('050')
		})

		it('(500, 3) should return 500', () => {
			expect(numberPad(500, 3)).toBe('500')
		})
	})

	describe('numberEven', () => {
		it.each([
			[1, 2],
			[2, 2],
			[3, 4],
			[4, 4]
		])('should return %d as the even number %d', (subject, result) => {
			expect(numberEven(subject)).toBe(result)
		})
	})

	describe('numberOdd', () => {
		it.each([
			[1, 1],
			[2, 3],
			[3, 3],
			[4, 5]
		])('should return %d as the odd number %d', (subject, result) => {
			expect(numberOdd(subject)).toBe(result)
		})
	})
})
