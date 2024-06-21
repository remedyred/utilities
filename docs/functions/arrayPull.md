[**@snickbit/utilities**](../README.md) • **Docs**

***

# Function: arrayPull()

## arrayPull(array, start, count)

> **arrayPull**\<`T`\>(`array`, `start`, `count`?): `T`[]

Pull elements from an array and return them as a new array
by providing a start index and optionally a count
if no count is provided, it pulls the remaining elements

Alternatively, you can provide a predicate function to pull elements

### Type parameters

• **T** = `unknown`

### Parameters

• **array**: `T`[]

• **start**: `number`

• **count?**: `number`

### Returns

`T`[]

## arrayPull(array, predicate)

> **arrayPull**\<`T`\>(`array`, `predicate`): `T`[]

Pull elements from an array and return them as a new array
by providing a predicate function to build your own comparison

Alternatively, by providing a start index and optionally a count
if no count is provided, it pulls the remaining elements

### Type parameters

• **T** = `unknown`

### Parameters

• **array**: `T`[]

• **predicate**: [`ArrayPredicate`](../type-aliases/ArrayPredicate.md)\<`T`\>

### Returns

`T`[]
