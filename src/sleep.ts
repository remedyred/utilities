/**
 * sleep for a given time
 * @category Misc.
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
