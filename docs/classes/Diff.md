# Class: Diff

## Table of contents

### Constructors

- [constructor](Diff.md#constructor)

### Properties

- [options](Diff.md#options)

### Accessors

- [changes](Diff.md#changes)
- [keepRemoved](Diff.md#keepremoved)
- [keys](Diff.md#keys)
- [removed](Diff.md#removed)

### Methods

- [clear](Diff.md#clear)
- [edited](Diff.md#edited)
- [left](Diff.md#left)
- [original](Diff.md#original)
- [remove](Diff.md#remove)
- [right](Diff.md#right)
- [set](Diff.md#set)
- [toJSON](Diff.md#tojson)

## Constructors

### constructor

• **new Diff**(`left`, `right`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `any` |
| `right` | `any` |
| `options?` | [`DiffOptions`](../interfaces/DiffOptions.md) |

## Properties

### options

• `Readonly` **options**: [`DiffOptions`](../interfaces/DiffOptions.md)

## Accessors

### changes

• `get` **changes**(): `any`

#### Returns

`any`

___

### keepRemoved

• `get` **keepRemoved**(): `boolean`

#### Returns

`boolean`

___

### keys

• `get` **keys**(): `IterableIterator`<`string` \| `number`\>

#### Returns

`IterableIterator`<`string` \| `number`\>

___

### removed

• `get` **removed**(): `any`

#### Returns

`any`

## Methods

### clear

▸ **clear**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `number` |

#### Returns

`void`

___

### edited

▸ **edited**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` \| `number` |

#### Returns

`any`

___

### left

▸ **left**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` \| `number` |

#### Returns

`any`

___

### original

▸ **original**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` \| `number` |

#### Returns

`any`

___

### remove

▸ **remove**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `number` |

#### Returns

`void`

___

### right

▸ **right**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` \| `number` |

#### Returns

`any`

___

### set

▸ **set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `number` |
| `value` | `any` |

#### Returns

`void`

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changes` | `any` |
| `removed` | `any` |
