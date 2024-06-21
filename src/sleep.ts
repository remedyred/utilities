/**
 * sleep for a given time
 * @category Misc.
 */
export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
