[**@snickbit/utilities**](../README.md) • **Docs**

***

# Function: objectOverwrite()

> **objectOverwrite**\<`I`\>(`object`, ...`objects`): `I`

Shallow merges multiple objects together, overwriting earlier objects' values with later objects' values.
Null and undefined values from later objects are ignored, and not copied over.

## Type parameters

• **I** *extends* `object` = [`IObject`](../type-aliases/IObject.md)

## Parameters

• **object**: `I`

• ...**objects**: [`IObject`](../type-aliases/IObject.md)[]

## Returns

`I`
