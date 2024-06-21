import {isEmpty} from '../src'

const defaultOptions: Partial<DiffOptions> = {
	keepRemoved: true
}

export class Diff {
	readonly options: DiffOptions
	private readonly _left: any
	private readonly _right: any
	protected _changes: any

	protected _removed: any
	protected _keys: Set<number | string>
	constructor(left: any, right: any, options?: DiffOptions) {
		this.options = {...defaultOptions, ...options}
		if (Array.isArray(left) && Array.isArray(right)) {
			this._changes = [] as any[]
			this._keys = new Set([...left.keys(), ...right.keys()])
		} else if (typeof left === 'object' && typeof right === 'object') {
			this._changes = {} as any
			this._keys = new Set([...Object.keys(left), ...Object.keys(right)])
		} else {
			this._keys = new Set()
		}
		this._left = left
		this._right = right

		this.checkDifferences()
	}

	get removed() {
		return this._removed
	}

	get keys() {
		return this._keys.values()
	}

	get keepRemoved() {
		return !!this.options.keepRemoved
	}

	get changes() {
		return this._changes
	}

	original(key?: number | string) {
		return this.left(key)
	}

	edited(key?: number | string) {
		return this.right(key)
	}

	left(key?: number | string) {
		return key === undefined ? this._left : this._left?.[key]
	}

	right(key?: number | string) {
		return key === undefined ? this._right : this._right?.[key]
	}

	set(key: number | string, value: any) {
		this._changes[key] = value
		this.checkDifferences()
	}

	clear(key: number | string) {
		if (key in this._changes) {
			this._changes[key] = undefined
			this.checkDifferences()
		}
	}

	remove(key: number | string) {
		this._removed[key] = true
		if (key in this._changes) {
			delete this._changes[key]
		}
		this.checkDifferences()
	}

	toJSON() {
		return {
			changes: this._changes,
			removed: this._removed
		}
	}

	protected initSubject() {
		return Array.isArray(this._left) ? [] : {}
	}

	protected checkDifferences() {
		this._changes ||= this.initSubject()
		this._removed ||= this.initSubject()

		for (const key of this.keys) {
			const leftValue = this.left(key)
			const rightValue = this.right(key)

			if (leftValue && (rightValue === undefined || rightValue === null)) {
				// Property/value was removed

				this._removed[key] = leftValue
				if (this.keepRemoved) {
					this._changes[key] = undefined
				} else {
					delete this._changes[key]
				}
			} else if (rightValue && (leftValue === undefined || leftValue === null)) {
				this._changes[key] = rightValue
			} else if (leftValue !== rightValue) {
				if (typeof leftValue === 'object' && typeof rightValue === 'object') {
					const diff = new Diff(leftValue, rightValue, this.options)
					if (diff.changes) {
						this._changes[key] = diff.changes
					}
					if (diff.removed && !isEmpty(diff.removed)) {
						this._removed[key] = diff.removed
					}
				} else {
					this._changes[key] = rightValue
				}
			}
		}
	}
}

export interface DiffOptions {
	keepRemoved?: boolean
}

export function diff(left: any, right: any, options?: DiffOptions): Diff {
	return new Diff(left, right, options)
}
