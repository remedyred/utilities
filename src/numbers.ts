/**
 * Pad a number with zeros.
 * @category Numbers
 */
export function numberPad(num: number | string, length = 2): string {
	num = String(num)
	const pad_length = length - num.length
	return pad_length > 0 ? '0'.repeat(pad_length) + num : num
}

/**
 * Format a number in bytes.
 * @category Numbers
 */
export function formatBytes(bytes: number, decimals = 2): string {
	if (bytes === 0) {
		return '0 Bytes'
	}

	const k = 1000
	const dm = decimals < 0 ? 0 : decimals
	const sizes = [
		'Bytes',
		'KB',
		'MB',
		'GB',
		'TB',
		'PB',
		'EB',
		'ZB',
		'YB'
	]

	const index = Math.floor(Math.log(bytes) / Math.log(k))

	return `${Number.parseFloat((bytes / Math.pow(k, index)).toFixed(dm))} ${sizes[index]}`
}

/**
 * Format a number as currency.
 * @category Numbers
 */
export function formatCurrency(amount: number, symbol = '$', decimals = 2) {
	return symbol + Number.parseFloat(String(amount || '0')).toFixed(decimals)
}

/**
 * Format a number as a percentage.
 * @category Numbers
 */
export function formatPercentage(amount: number, decimals = 2) {
	return `${Number.parseFloat(String(amount || '0')).toFixed(decimals)}%`
}

/**
 * limit the amount of decimals to the given number
 * @category Numbers
 */
export function maxDecimals(value: number, max_places = 2) {
	return +Number.parseFloat(String(value)).toFixed(max_places)
}

/**
 * Generate a random number between min and max.
 * @category Numbers
 */
export function randomBetween(min: number, max: number, inclusive = true): number {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + (inclusive ? 1 : 0)) + min)
}

/**
 * Force a number to be even
 * @category Numbers
 */
export function numberEven(num: number, subtract = false): number {
	return num % 2 === 0 ? num : num + (subtract ? -1 : 1)
}

/**
 * Force a number to be odd
 * @category Numbers
 */
export function numberOdd(num: number, subtract = false): number {
	return num % 2 === 1 ? num : num + (subtract ? -1 : 1)
}

/**
 * Convert a string to a number, but less strict than Number() or parseInt().
 * Will remove all non-numeric characters, and also round the number if it has decimals.
 */
export function toInt(value: number | string): number {
	return Math.round(Number(String(value).replaceAll(/[^\d.-]+/g, '').trim() || 0))
}
