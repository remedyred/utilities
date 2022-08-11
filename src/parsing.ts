import {parseOptions} from './functions'
import {isDefined} from './validations'
import {isJSONString} from './variables'

/**
 * Parse a string into it's primitive type if possible. If not, return the original variable.
 *
 * @example '123' => 123 | '123.456' => 123.456 | 'true' => true | 'false' => false | 'null' => null | 'undefined' => undefined
 * @category Parsing
 */
export function parse(value: any): any {
	if (typeof value !== 'string') {
		return value
	}

	switch (value) {
		case 'undefined':
			return undefined
		case 'null':
			return null
		case 'NaN':
			return NaN
		case 'Infinity':
			return Infinity
		case 'true':
			return true
		case 'false':
			return false
	}

	if (isJSONString(value)) {
		return JSONParse(value)
	}

	const num = parseFloat(value)
	if (!Number.isNaN(num) && isFinite(num)) {
		if (value.toLowerCase().indexOf('0x') === 0) {
			return parseInt(value, 16)
		}
		return num
	}

	return value
}

/**
 * Parse a string into JSON
 * @category Parsing
 */
export function JSONParse<T = any>(text: string, strict?: boolean): T | undefined {
	if (!isDefined(text)) {
		return undefined
	}

	let json: T | undefined
	try {
		json = JSON.parse(text)
	} catch (e) {
		if (strict) {
			throw e
		}
	}
	return json
}

type JSONStringifyOptions = boolean | {force?: boolean; pretty?: boolean | number}

/**
 * Parse a variable into a JSON string
 * @category Parsing
 */
export function JSONStringify<T = any>(data: T, options: JSONStringifyOptions = false): string {
	if (!isDefined(data)) {
		return ''
	}
	if (typeof options === 'boolean') {
		options = {force: options}
	}

	const parsedOptions = parseOptions(options, {force: false, pretty: undefined})
	parsedOptions.pretty = parsedOptions.pretty === true ? 2 : parsedOptions.pretty

	try {
		return JSON.stringify(data, null, parsedOptions.pretty)
	} catch (e) {
		return ''
	}
}

/**
 * Pretty print a JSON string
 * @category Parsing
 */
export const JSONPrettify = (data: any, spacer = 2): string => JSONStringify(data, {pretty: spacer})
