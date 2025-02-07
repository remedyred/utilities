[**@snickbit/utilities**](../README.md) • **Docs**

***

# Function: memoize()

> **memoize**\<`F`\>(`fn`): `F`

Creates a memoized version of the provided function.

The memoized function caches the return value based on its arguments.
Later calls with the same arguments will return the cached result.

## Type parameters

• **F** *extends* (...`args`) => `any`

The type of the function to memoize.

## Parameters

• **fn**: `F`

The function to memoize.

## Returns

`F`

- A memoized version of the provided function.

## Example

```ts
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
memoizedAdd(1, 2); // Computes and caches the result.
memoizedAdd(1, 2); // Returns the cached result.
```
