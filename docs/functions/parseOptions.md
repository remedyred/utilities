[**@snickbit/utilities**](../README.md) • **Docs**

***

# Function: parseOptions()

> **parseOptions**(`given`, `defaults`, `non_object_key`?): `any` \| `object`

Parse options for a function

## Parameters

• **given**: `any`

• **defaults**: [`IObject`](../type-aliases/IObject.md)

• **non\_object\_key?**: `string`

## Returns

`any` \| `object`

## Example

```ts
const options = parseOptions(true, {param: 'default'}, 'my_param')
// {param: 'default', my_param: true}
```
