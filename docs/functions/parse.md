[**@snickbit/utilities**](../README.md) • **Docs**

***

# Function: parse()

> **parse**(`value`): `any`

Parse a string into it's primitive type if possible. If not, return the original variable.

## Parameters

• **value**: `any`

## Returns

`any`

## Example

```ts
'123' => 123 | '123.456' => 123.456 | 'true' => true | 'false' => false | 'null' => null | 'undefined' => undefined
```
