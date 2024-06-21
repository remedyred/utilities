import {Diff, diff} from '../src'

describe('objectDiff', () => {
	it('should expose a diff function', () => {
		expect(diff).toBeDefined()
	})
	it('should expose a Diff class', () => {
		expect(Diff).toBeDefined()
	})

	it('should return the difference between two objects', () => {
		const subject1: any = {
			ratingKey: '68490',
			summary: 'With Something',
			index: 2,
			Genre: [
				{
					tag: 'Drama'
				}
			],
			availableAt: '2019-10-04'
		}

		const subject2: any = {
			...subject1,
			summary: 'With Something 2',
			Genre: [
				{
					tag: 'Fantasy'
				}
			],
			originallyAvailableAt: '2019-10-04'
		}
		delete subject2.availableAt

		const subjectDiff = {
			summary: 'With Something 2',
			Genre: [
				{
					tag: 'Fantasy'
				}
			],
			originallyAvailableAt: '2019-10-04',
			availableAt: undefined
		}

		expect(diff(subject1, subject2).changes).toStrictEqual(subjectDiff)
	})

	it('should return the edits between two objects', () => {
		const original: any = {
			ratingKey: '68490',
			summary: 'With Something',
			index: 2,
			Genre: [
				{
					tag: 'Drama'
				}
			],
			availableAt: '2019-10-04'
		}

		const edited: any = {
			...original,
			summary: 'With Something 2',
			Genre: [
				{
					tag: 'Fantasy'
				}
			],
			originallyAvailableAt: '2019-10-04'
		}
		delete edited.availableAt

		const edits = {
			summary: 'With Something 2',
			Genre: [
				{
					tag: 'Fantasy'
				}
			],
			originallyAvailableAt: '2019-10-04'
		}

		expect(diff(original, edited, {keepRemoved: false}).changes).toStrictEqual(edits)
	})

	it('should return both edits and removed as undefined', () => {
		const original: any = {
			ratingKey: '68490',
			summary: 'With Something',
			index: 2,
			Genre: [
				{
					tag: 'Drama'
				}
			],
			availableAt: '2019-10-04'
		}

		const edited: any = {
			...original,
			summary: 'With Something 2',
			Genre: [
				{
					tag: 'Fantasy'
				}
			],
			originallyAvailableAt: '2019-10-04'
		}
		delete edited.availableAt

		const edits = {
			summary: 'With Something 2',
			Genre: [
				{
					tag: 'Fantasy'
				}
			],
			originallyAvailableAt: '2019-10-04',
			availableAt: undefined
		}

		expect(diff(original, edited).changes).toStrictEqual(edits)
	})

	it('should return only removed parts', () => {
		const original: any = {
			ratingKey: '68490',
			summary: 'With Something',
			index: 2,
			Genre: [
				{
					tag: 'Drama'
				}
			],
			availableAt: '2019-10-04'
		}

		const edited: any = {
			...original,
			summary: 'With Something 2',
			Genre: [
				{
					tag: 'Fantasy'
				}
			],
			originallyAvailableAt: '2019-10-04'
		}
		delete edited.availableAt

		const edits = {
			availableAt: '2019-10-04'
		}

		expect(diff(original, edited).removed).toStrictEqual(edits)
	})
})
