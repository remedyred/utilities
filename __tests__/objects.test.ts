import {objectClone, objectCopy, objectExcept, objectFilter, objectFind, objectFindEntry, objectFindKey, objectFlatten, objectGetMethod, objectHasMethod, objectMerge, objectMergeDeep, objectMethods, objectOnly, ObjectPredicate, objectPull, objectSort} from '../src'

const mockPlainObject = {
	a: 1,
	b: 2,
	c: 3
}

const mockSubObject = {
	e: 4,
	f: 5,
	g: 6
}

const nestedObject = {
	...mockPlainObject,
	d: mockSubObject
}

const mockObject = {
	...nestedObject,
	h() {
		return 7
	}
}

const mockExtraObject = {
	i: 8,
	j: 9,
	k: 10
}

const mockObjectWithArray = {
	...mockPlainObject,
	l: [11, 12, 13]
}

const mockObjectWithSameArray = {l: [14, 15]}

describe('objects', () => {
	describe('objectFindKey', () => {
		it('should expose a function', () => {
			expect(objectFindKey).toBeInstanceOf(Function)
		})

		it('should accept a string, and return the appropriate key', () => {
			expect(objectFindKey(mockObject, 'c')).toBe('c')
		})

		it('should accept a predicate, and return the appropriate key', () => {
			const predicate: ObjectPredicate = (key, value) => value === 3
			expect(objectFindKey(mockObject, predicate)).toBe('c')
		})
	})

	describe('objectFind', () => {
		it('should expose a function', () => {
			expect(objectFind).toBeDefined()
		})

		it('should accept a string (key) and return the appropriate value', () => {
			expect(objectFind(mockObject, 'c')).toBe(3)
		})

		it('should accept a predicate, and return the appropriate key', () => {
			const predicate: ObjectPredicate = key => key === 'c'
			expect(objectFind(mockObject, predicate)).toBe(3)
		})
	})

	describe('objectFindEntry', () => {
		it('should expose a function', () => {
			expect(objectFindEntry).toBeDefined()
		})

		it('should accept a string (key) and return the appropriate value', () => {
			expect(objectFindEntry(mockObject, 'c')).toStrictEqual(['c', 3])
		})

		it('should accept a predicate, and return the appropriate key', () => {
			const predicate: ObjectPredicate = key => key === 'c'
			expect(objectFindEntry(mockObject, predicate)).toStrictEqual(['c', 3])
		})
	})

	describe('objectHasMethod', () => {
		it('should expose a function', () => {
			expect(objectHasMethod).toBeDefined()
		})

		it('should accept a string (key) and correctly test for a matching method (true)', () => {
			expect(objectHasMethod(mockObject, 'h')).toBe(true)
		})

		it('should accept a string (key) and correctly test for a matching method (false)', () => {
			expect(objectHasMethod(mockObject, 'c')).toBe(false)
		})
	})

	describe('objectGetMethod', () => {
		it('should expose a function', () => {
			expect(objectGetMethod).toBeDefined()
		})

		it('should accept a string (key) and return a method if it exists (true)', () => {
			expect(objectGetMethod(mockObject, 'h')).toBe(mockObject.h)
		})

		it('should accept a string (key) and return a method if it exists (false)', () => {
			expect(objectGetMethod(mockObject, 'c')).toBeUndefined()
		})
	})

	describe('objectFilter', () => {
		it('should expose a function', () => {
			expect(objectFilter).toBeDefined()
		})

		it('should accept an object and a predicate, and return a filtered object', () => {
			const predicate: ObjectPredicate = (key, value) => value < 4
			expect(objectFilter(mockObject, predicate)).toStrictEqual(mockPlainObject)
		})
	})

	describe('objectOnly', () => {
		it('should expose a function', () => {
			expect(objectOnly).toBeDefined()
		})

		it('should accept an object and an array, and return only the keys from the array', () => {
			const keys = ['a', 'b']
			expect(objectOnly(mockPlainObject, keys)).toStrictEqual({a: 1, b: 2})
		})
	})

	describe('objectExcept', () => {
		it('should expose a function', () => {
			expect(objectExcept).toBeDefined()
		})

		it('should accept an object and an array, and return everything except the keys from the array', () => {
			const keys = ['a', 'b']
			expect(objectExcept(mockPlainObject, keys)).toStrictEqual({c: 3})
		})
	})

	describe('objectFlatten', () => {
		it('should expose a function', () => {
			expect(objectFlatten).toBeDefined()
		})

		xit('should accept a nested object, and return an object with only a single level', () => {
			expect(nestedObject).toStrictEqual({
				a: 1,
				b: 2,
				c: 3,
				'd.e': 4,
				'd.f': 5,
				'd.g': 6
			})
		})
	})

	describe('objectClone', () => {
		it('should expose a function', () => {
			expect(objectClone).toBeDefined()
		})

		it('should make a full copy of a plain object', () => {
			const clone = objectClone(mockPlainObject)
			expect(clone).toStrictEqual(mockPlainObject)
			clone.a = 12
			expect(clone).not.toStrictEqual(mockPlainObject)
		})

		it('should make a full copy of a functional object', () => {
			const clone = objectClone(mockObject)
			expect(clone).toStrictEqual(mockObject)
			clone.a = 12
			expect(clone).not.toStrictEqual(mockObject)
		})
	})

	describe('objectCopy', () => {
		it('should expose a function', () => {
			expect(objectCopy).toBeDefined()
		})

		it('should make a full copy of a plain object', () => {
			const clone = objectCopy(mockPlainObject)
			expect(clone).toStrictEqual(mockPlainObject)
			clone.a = 12
			expect(clone).not.toStrictEqual(mockPlainObject)
		})

		it('should make a partial copy of a functional object', () => {
			const clone = objectCopy(mockObject)
			expect(clone).toStrictEqual(nestedObject)
			clone.a = 12
			expect(clone).not.toStrictEqual(nestedObject)
		})
	})

	describe('objectMerge', () => {
		it('should expose a function', () => {
			expect(objectMerge).toBeDefined()
		})

		it('should combine two plain objects', () => {
			expect(objectMerge(mockPlainObject, mockSubObject)).toStrictEqual({
				...mockPlainObject,
				...mockSubObject
			})
		})

		it('should combine a plain object and a functional object', () => {
			expect(objectMerge(mockObject, mockExtraObject)).toStrictEqual({
				...mockObject,
				...mockExtraObject
			})
		})
	})

	describe('objectMergeDeep', () => {
		it('should expose a function', () => {
			expect(objectMergeDeep).toBeDefined()
		})

		xit('objectMergeDeep should return expected output', () => {
			expect(objectMergeDeep(mockObjectWithArray, mockObjectWithSameArray)).toStrictEqual({
				...mockPlainObject,
				l: [
					11,
					12,
					13,
					14,
					15
				]
			})
		})
	})

	describe('objectMethods', () => {
		it('should expose a function', () => {
			expect(objectMethods).toBeDefined()
		})

		it('should return the keys of an objects methods', () => {
			expect(objectMethods(mockObject)).toStrictEqual(['h'])
		})
	})

	describe('objectPull', () => {
		it('should expose a function', () => {
			expect(objectPull).toBeDefined()
		})

		let pullableObject: any
		let pulledKey: string
		let pulledValue: number

		beforeEach(() => {
			pullableObject = {...mockPlainObject}
			pulledKey = 'a'
		})

		it('should accept an object and a key', () => {
			expect(() => {
				pulledValue = objectPull(pullableObject, pulledKey)
			}).not.toThrow()
		})

		beforeEach(() => {
			pulledValue = objectPull(pullableObject, pulledKey)
		})

		it('should return the value of the key', () => {
			expect(pulledValue).toBe(1)
		})

		it('should remove the key from the object', () => {
			expect(pullableObject).toStrictEqual({b: 2, c: 3})
		})
	})

	describe.only('objectSort', () => {
		it('should expose a function', () => {
			expect(objectSort).toBeDefined()
		})

		let unsortedObject: any

		beforeEach(() => {
			unsortedObject = {
				c: 3,
				b: 2,
				a: 1
			}
		})

		it('unsorted object should not equal sorted object', () => {
			expect(JSON.stringify(unsortedObject)).not.toEqual(JSON.stringify(mockPlainObject))
		})

		it('should accept an object and sort it by it\'s keys', () => {
			const sorted = objectSort(unsortedObject)
			expect(JSON.stringify(sorted)).toEqual(JSON.stringify(mockPlainObject))
		})

		it('should accept an object and sort it by a predicate', () => {
			const sorted = objectSort(unsortedObject, ([, value_a]: [string, number], [, value_b]: [string, number]) => {
				return value_a - value_b
			})
			expect(JSON.stringify(sorted)).toEqual(JSON.stringify({
				a: 1,
				b: 2,
				c: 3
			}))
		})
	})
})
