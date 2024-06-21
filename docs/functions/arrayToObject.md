[**@snickbit/utilities**](../README.md) • **Docs**

***

# Function: arrayToObject()

> **arrayToObject**\<`T`, `V`\>(`array`, `key`, `value`): `Record`\<`string`, `V`\>

Convert an array to an object using the given key as the property

## Type parameters

• **T** = `any`

• **V** = `T`

## Parameters

• **array**: `T`[]

• **key**: keyof `T`

• **value**: keyof `T`

## Returns

`Record`\<`string`, `V`\>

## Examples

```ts
arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'id', 'name')
// {1: 'John', 2: 'Jane'}
```

```ts
arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'name')
// {John: {id: 1, name: 'John'}, Jane: {id: 2, name: 'Jane'}}
```
