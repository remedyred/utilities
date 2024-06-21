[**@snickbit/utilities**](../README.md) • **Docs**

***

# Class: Diff

## Constructors

### new Diff()

> **new Diff**(`left`, `right`, `options`?): [`Diff`](Diff.md)

#### Parameters

• **left**: `any`

• **right**: `any`

• **options?**: [`DiffOptions`](../interfaces/DiffOptions.md)

#### Returns

[`Diff`](Diff.md)

## Properties

### options

> `readonly` **options**: [`DiffOptions`](../interfaces/DiffOptions.md)

## Accessors

### changes

> `get` **changes**(): `any`

#### Returns

`any`

***

### keepRemoved

> `get` **keepRemoved**(): `boolean`

#### Returns

`boolean`

***

### keys

> `get` **keys**(): `IterableIterator`\<`string` \| `number`\>

#### Returns

`IterableIterator`\<`string` \| `number`\>

***

### removed

> `get` **removed**(): `any`

#### Returns

`any`

## Methods

### clear()

> **clear**(`key`): `void`

#### Parameters

• **key**: `string` \| `number`

#### Returns

`void`

***

### edited()

> **edited**(`key`?): `any`

#### Parameters

• **key?**: `string` \| `number`

#### Returns

`any`

***

### left()

> **left**(`key`?): `any`

#### Parameters

• **key?**: `string` \| `number`

#### Returns

`any`

***

### original()

> **original**(`key`?): `any`

#### Parameters

• **key?**: `string` \| `number`

#### Returns

`any`

***

### remove()

> **remove**(`key`): `void`

#### Parameters

• **key**: `string` \| `number`

#### Returns

`void`

***

### right()

> **right**(`key`?): `any`

#### Parameters

• **key?**: `string` \| `number`

#### Returns

`any`

***

### set()

> **set**(`key`, `value`): `void`

#### Parameters

• **key**: `string` \| `number`

• **value**: `any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### changes

> **changes**: `any`

##### removed

> **removed**: `any`
