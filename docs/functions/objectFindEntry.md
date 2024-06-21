[**@snickbit/utilities**](../README.md) • **Docs**

***

# Function: objectFindEntry()

> **objectFindEntry**\<`T`, `I`\>(`object`, `predicate`): [`string`, `T`] \| `undefined`

Finds an object property's entry [key, value] that matches the given predicate

## Type parameters

• **T** = `any`

• **I** *extends* `object` = [`IObject`](../type-aliases/IObject.md)

## Parameters

• **object**: `I`

• **predicate**: `string` \| `symbol` \| [`ObjectPredicate`](../type-aliases/ObjectPredicate.md)\<`any`, `string`, `any`\>

## Returns

[`string`, `T`] \| `undefined`
