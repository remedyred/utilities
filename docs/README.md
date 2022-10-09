# @snickbit/utilities

## Table of contents

### Validation Interfaces

- [AnyFunction](interfaces/AnyFunction.md)
- [AsyncFunction](interfaces/AsyncFunction.md)

### Arrays Type Aliases

- [ArrayPredicate](README.md#arraypredicate)

### Generators Type Aliases

- [CombinationOptions](README.md#combinationoptions)

### Modules Type Aliases

- [AdvancedVariableType](README.md#advancedvariabletype)
- [BasicVariableType](README.md#basicvariabletype)
- [CallableVariableType](README.md#callablevariabletype)
- [EmptyVariableType](README.md#emptyvariabletype)
- [FunctionType](README.md#functiontype)
- [OverloadSchema](README.md#overloadschema)
- [PrimitiveVariableType](README.md#primitivevariabletype)
- [TryWaitFunction](README.md#trywaitfunction)
- [VariableType](README.md#variabletype)

### Objects Type Aliases

- [IObject](README.md#iobject)
- [ObjectPredicate](README.md#objectpredicate)

### Templating Type Aliases

- [interpolateReplacements](README.md#interpolatereplacements)

### Validation Type Aliases

- [AnyClass](README.md#anyclass)
- [ArrayWithValues](README.md#arraywithvalues)
- [EmptyArray](README.md#emptyarray)
- [EmptyObject](README.md#emptyobject)
- [VariableTypeDefinition](README.md#variabletypedefinition)

### Variables

- [advanced](README.md#advanced)
- [all](README.md#all)
- [basic](README.md#basic)
- [callable](README.md#callable)
- [empty](README.md#empty)
- [primitive](README.md#primitive)
- [reserved](README.md#reserved)

### Arrays Functions

- [arrayDuplicates](README.md#arrayduplicates)
- [arrayMerge](README.md#arraymerge)
- [arrayMergeDeep](README.md#arraymergedeep)
- [arrayReject](README.md#arrayreject)
- [arrayRemove](README.md#arrayremove)
- [arrayShuffle](README.md#arrayshuffle)
- [arrayToObject](README.md#arraytoobject)
- [arrayUnique](README.md#arrayunique)
- [arrayUniqueInsensitive](README.md#arrayuniqueinsensitive)
- [arrayWrap](README.md#arraywrap)
- [isSingle](README.md#issingle)

### Functions Functions

- [functionClone](README.md#functionclone)
- [overloadOptions](README.md#overloadoptions)
- [parseOptions](README.md#parseoptions)
- [promiseAll](README.md#promiseall)
- [tryWait](README.md#trywait)

### Generators Functions

- [combinations](README.md#combinations)
- [makeRandomSegment](README.md#makerandomsegment)
- [randomString](README.md#randomstring)
- [uuid](README.md#uuid)

### Modules Functions

- [findFirstDiff](README.md#findfirstdiff)
- [plural](README.md#plural)
- [singular](README.md#singular)

### Numbers Functions

- [formatBytes](README.md#formatbytes)
- [formatCurrency](README.md#formatcurrency)
- [formatPercentage](README.md#formatpercentage)
- [maxDecimals](README.md#maxdecimals)
- [numberEven](README.md#numbereven)
- [numberOdd](README.md#numberodd)
- [numberPad](README.md#numberpad)
- [randomBetween](README.md#randombetween)

### Objects Functions

- [objectClone](README.md#objectclone)
- [objectCopy](README.md#objectcopy)
- [objectExcept](README.md#objectexcept)
- [objectFilter](README.md#objectfilter)
- [objectFind](README.md#objectfind)
- [objectFindEntry](README.md#objectfindentry)
- [objectFindKey](README.md#objectfindkey)
- [objectFlatten](README.md#objectflatten)
- [objectGetMethod](README.md#objectgetmethod)
- [objectHasMethod](README.md#objecthasmethod)
- [objectMerge](README.md#objectmerge)
- [objectMergeDeep](README.md#objectmergedeep)
- [objectMethods](README.md#objectmethods)
- [objectOnly](README.md#objectonly)
- [objectPull](README.md#objectpull)
- [objectSort](README.md#objectsort)

### Parsing Functions

- [JSONParse](README.md#jsonparse)
- [JSONPrettify](README.md#jsonprettify)
- [JSONStringify](README.md#jsonstringify)
- [camelCase](README.md#camelcase)
- [initials](README.md#initials)
- [kebabCase](README.md#kebabcase)
- [limitString](README.md#limitstring)
- [limitWords](README.md#limitwords)
- [padString](README.md#padstring)
- [parse](README.md#parse)
- [safeVarName](README.md#safevarname)
- [sleep](README.md#sleep)
- [slugify](README.md#slugify)
- [snakeCase](README.md#snakecase)
- [spaceCase](README.md#spacecase)

### Templating Functions

- [escapeRegExp](README.md#escaperegexp)
- [escapeReplacement](README.md#escapereplacement)
- [interpolate](README.md#interpolate)

### Validation Functions

- [isArray](README.md#isarray)
- [isAsyncFunction](README.md#isasyncfunction)
- [isAwaitable](README.md#isawaitable)
- [isBase64](README.md#isbase64)
- [isBoolean](README.md#isboolean)
- [isClass](README.md#isclass)
- [isDate](README.md#isdate)
- [isDefined](README.md#isdefined)
- [isEmpty](README.md#isempty)
- [isFunction](README.md#isfunction)
- [isNullDefined](README.md#isnulldefined)
- [isNumber](README.md#isnumber)
- [isObject](README.md#isobject)
- [isPrimitive](README.md#isprimitive)
- [isPromise](README.md#ispromise)
- [isSet](README.md#isset)
- [isString](README.md#isstring)
- [isType](README.md#istype)

### Variables Functions

- [clone](README.md#clone)
- [count](README.md#count)
- [isCallable](README.md#iscallable)
- [isJSONString](README.md#isjsonstring)
- [merge](README.md#merge)
- [mergeDeep](README.md#mergedeep)
- [typeOf](README.md#typeof)

## Arrays Type Aliases

### ArrayPredicate

Ƭ **ArrayPredicate**: (`value`: `any`, `index?`: `number`, `array?`: `any`[]) => `unknown`

#### Type declaration

▸ (`value`, `index?`, `array?`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `index?` | `number` |
| `array?` | `any`[] |

##### Returns

`unknown`

___

## Generators Type Aliases

### CombinationOptions

Ƭ **CombinationOptions**: `Record`<`string`, `any`[]\>

___

## Modules Type Aliases

### AdvancedVariableType

Ƭ **AdvancedVariableType**: ``"array"`` \| ``"date"`` \| ``"object"`` \| ``"symbol"``

___

### BasicVariableType

Ƭ **BasicVariableType**: ``"bigint"`` \| ``"boolean"`` \| ``"number"`` \| ``"string"``

___

### CallableVariableType

Ƭ **CallableVariableType**: ``"asyncfunction"`` \| ``"function"`` \| ``"promise"``

___

### EmptyVariableType

Ƭ **EmptyVariableType**: ``"null"`` \| ``"undefined"``

___

### FunctionType

Ƭ **FunctionType**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

___

### OverloadSchema

Ƭ **OverloadSchema**: `Record`<`string`, [`VariableType`](README.md#variabletype)\>

___

### PrimitiveVariableType

Ƭ **PrimitiveVariableType**: [`BasicVariableType`](README.md#basicvariabletype) \| [`EmptyVariableType`](README.md#emptyvariabletype)

___

### TryWaitFunction

Ƭ **TryWaitFunction**: (...`args`: `any`[]) => `Promise`<`any`\> \| `any`

#### Type declaration

▸ (...`args`): `Promise`<`any`\> \| `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Promise`<`any`\> \| `any`

___

### VariableType

Ƭ **VariableType**: [`AdvancedVariableType`](README.md#advancedvariabletype) \| [`CallableVariableType`](README.md#callablevariabletype) \| [`PrimitiveVariableType`](README.md#primitivevariabletype)

___

## Objects Type Aliases

### IObject

Ƭ **IObject**: `Record`<`string` \| `symbol`, `any`\>

___

### ObjectPredicate

Ƭ **ObjectPredicate**<`T`\>: (`key`: `string` \| `symbol`, `value?`: `T`, `object?`: `object`) => `unknown`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (`key`, `value?`, `object?`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `symbol` |
| `value?` | `T` |
| `object?` | `object` |

##### Returns

`unknown`

___

## Templating Type Aliases

### interpolateReplacements

Ƭ **interpolateReplacements**: `Record`<`string`, `any` \| `number` \| `string`\>

___

## Validation Type Aliases

### AnyClass

Ƭ **AnyClass**: (...`args`: `any`[]) => [`AnyClass`](README.md#anyclass)

#### Type declaration

• **new AnyClass**(...`args`): [`AnyClass`](README.md#anyclass)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

[`AnyClass`](README.md#anyclass)

___

### ArrayWithValues

Ƭ **ArrayWithValues**: [`any`, ...any]

___

### EmptyArray

Ƭ **EmptyArray**: `never`[]

___

### EmptyObject

Ƭ **EmptyObject**: `Record`<`any`, `never`\>

___

### VariableTypeDefinition

Ƭ **VariableTypeDefinition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |

## Variables

### advanced

• `Const` **advanced**: [`AdvancedVariableType`](README.md#advancedvariabletype)[]

___

### all

• `Const` **all**: [`VariableType`](README.md#variabletype)[]

___

### basic

• `Const` **basic**: [`BasicVariableType`](README.md#basicvariabletype)[]

___

### callable

• `Const` **callable**: [`CallableVariableType`](README.md#callablevariabletype)[]

___

### empty

• `Const` **empty**: [`EmptyVariableType`](README.md#emptyvariabletype)[]

___

### primitive

• `Const` **primitive**: [`PrimitiveVariableType`](README.md#primitivevariabletype)[]

___

### reserved

• `Const` **reserved**: `string`[]

## Arrays Functions

### arrayDuplicates

▸ **arrayDuplicates**(`array`, `predicate?`): `any`[]

Return the duplicate values from an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `predicate?` | [`ArrayPredicate`](README.md#arraypredicate) |

#### Returns

`any`[]

___

### arrayMerge

▸ **arrayMerge**(...`arrs`): `any`[]

Merge two or more arrays together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrs` | `any`[][] |

#### Returns

`any`[]

___

### arrayMergeDeep

▸ **arrayMergeDeep**(...`arrs`): `any`[]

Merge two or more arrays together, recursing child values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrs` | `any`[][] |

#### Returns

`any`[]

___

### arrayReject

▸ **arrayReject**(`array`, `callback`): `any`[]

Get the reverse of a filtered array

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `callback` | (...`args`: `any`[]) => `boolean` |

#### Returns

`any`[]

___

### arrayRemove

▸ **arrayRemove**(`array`, `value`): `any`[]

Finds and returns an element from an array, removing it in the process

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `value` | `any` |

#### Returns

`any`[]

___

### arrayShuffle

▸ **arrayShuffle**(`array`): `any`[]

Shuffles/randomizes an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |

#### Returns

`any`[]

___

### arrayToObject

▸ **arrayToObject**(`array`, `key`, `value`): `object`

Convert an array to an object using the given key as the property

**`Example`**

```ts
arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'id', 'name')
// {1: 'John', 2: 'Jane'}
```

**`Example`**

```ts
arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'name')
// {John: {id: 1, name: 'John'}, Jane: {id: 2, name: 'Jane'}}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `key` | `string` \| `number` |
| `value` | `string` \| `number` |

#### Returns

`object`

___

### arrayUnique

▸ **arrayUnique**(`array`, `key?`): `any`[]

Returns unique values from an array. Optionally pass a key when the array is an object array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `key?` | `string` |

#### Returns

`any`[]

___

### arrayUniqueInsensitive

▸ **arrayUniqueInsensitive**(`array`, `key?`): `any`[]

Returns unique values from an array, ignoring case. Optionally pass a key when the array is an object array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `key?` | `string` |

#### Returns

`any`[]

___

### arrayWrap

▸ **arrayWrap**(`values`): `any`[]

Wrap a variable in an array if it is not already an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `any` |

#### Returns

`any`[]

___

### isSingle

▸ **isSingle**(`array`, `value?`): `boolean`

Checks if the given array only contains a single value, optionally pass a value or predicate to check against

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `value?` | `any` |

#### Returns

`boolean`

___

## Functions Functions

### functionClone

▸ **functionClone**(`fn`): [`FunctionType`](README.md#functiontype)

Clone a function

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`FunctionType`](README.md#functiontype) |

#### Returns

[`FunctionType`](README.md#functiontype)

___

### overloadOptions

▸ **overloadOptions**(`options`, `schemas`): `object`

Parses an array of arguments for an overloaded function into an object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any`[] |
| `schemas` | [`OverloadSchema`](README.md#overloadschema)[] |

#### Returns

`object`

___

### parseOptions

▸ **parseOptions**(`given`, `defaults`, `non_object_key?`): `any` \| `object`

Parse options for a function

**`Example`**

```ts
const options = parseOptions(true, {param: 'default'}, 'my_param')
// {param: 'default', my_param: true}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `given` | `any` | The given options |
| `defaults` | [`IObject`](README.md#iobject) | The default options |
| `non_object_key?` | `string` | Optional key to use if the given options are not an object, will be added to the defaults object |

#### Returns

`any` \| `object`

___

### promiseAll

▸ **promiseAll**(`array`, `fn`): `Promise`<`Awaited`<`unknown`\>[]\>

Send each item in an array to a function, await the results

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `fn` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `any` |

#### Returns

`Promise`<`Awaited`<`unknown`\>[]\>

___

### tryWait

▸ **tryWait**(`fn`, ...`args`): `Promise`<`any`\>

Catch an async function or promise and force it to resolve, returning undefined if it fails

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TryWaitFunction`](README.md#trywaitfunction) |
| `...args` | `any`[][] |

#### Returns

`Promise`<`any`\>

___

## Generators Functions

### combinations

▸ **combinations**(`options`): `any`[]

Generate an array of all possible property values. Provide an object with each property as a key and an array of possible values as the value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CombinationOptions`](README.md#combinationoptions) |

#### Returns

`any`[]

___

### makeRandomSegment

▸ **makeRandomSegment**(): `string`

Generate a random string between 8 and 14 characters long

#### Returns

`string`

___

### randomString

▸ **randomString**(`length?`): `string`

Generate a random string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `10` |

#### Returns

`string`

___

### uuid

▸ **uuid**(`prefix?`): `string`

Create uuid

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | `string` | `''` |

#### Returns

`string`

___

## Modules Functions

### findFirstDiff

▸ **findFirstDiff**(`first`, `second`): `number`

Return the index of the first difference between two strings

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `any` |
| `second` | `any` |

#### Returns

`number`

-1 if no difference

___

### plural

▸ **plural**(`word`, `count?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `count?` | `number` |

#### Returns

`any`

▸ **plural**(`word`, `pluralized`, `count?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `pluralized` | `string` |
| `count?` | `number` |

#### Returns

`any`

___

### singular

▸ **singular**(`word`, `count?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `count?` | `number` |

#### Returns

`any`

▸ **singular**(`word`, `singularized`, `count?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `singularized` | `string` |
| `count?` | `number` |

#### Returns

`any`

___

## Numbers Functions

### formatBytes

▸ **formatBytes**(`bytes`, `decimals?`): `string`

Format a number in bytes.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bytes` | `number` | `undefined` | The number of bytes. |
| `decimals?` | `number` | `2` | The number of decimals. |

#### Returns

`string`

___

### formatCurrency

▸ **formatCurrency**(`amount`, `symbol?`, `decimals?`): `string`

Format a number as currency.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount` | `number` | `undefined` | The number to format. |
| `symbol?` | `string` | `'$'` | The currency symbol. |
| `decimals?` | `number` | `2` | The number of decimals. |

#### Returns

`string`

___

### formatPercentage

▸ **formatPercentage**(`amount`, `decimals?`): `string`

Format a number as a percentage.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount` | `number` | `undefined` | The number to format. |
| `decimals?` | `number` | `2` | The number of decimals to show. |

#### Returns

`string`

___

### maxDecimals

▸ **maxDecimals**(`value`, `max_places?`): `number`

limit the amount of decimals to the given number

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | the number to limit |
| `max_places?` | `number` | `2` | the maximum number of decimals |

#### Returns

`number`

___

### numberEven

▸ **numberEven**(`num`, `subtract?`): `number`

Force a number to be even

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `num` | `number` | `undefined` | the number to force even |
| `subtract?` | `boolean` | `false` | whether to subtract 1 from the number if it is odd |

#### Returns

`number`

___

### numberOdd

▸ **numberOdd**(`num`, `subtract?`): `number`

Force a number to be odd

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `num` | `number` | `undefined` | the number to force odd |
| `subtract?` | `boolean` | `false` | whether to subtract 1 from the number if it is even |

#### Returns

`number`

___

### numberPad

▸ **numberPad**(`num`, `length?`): `string`

Pad a number with zeros.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `num` | `string` \| `number` | `undefined` | The number to pad. |
| `length?` | `number` | `2` | The length of the resulting string. |

#### Returns

`string`

___

### randomBetween

▸ **randomBetween**(`min`, `max`, `inclusive?`): `number`

Generate a random number between min and max.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `min` | `number` | `undefined` | The minimum number. |
| `max` | `number` | `undefined` | The maximum number. |
| `inclusive?` | `boolean` | `true` | Whether to include the max value in the range. |

#### Returns

`number`

___

## Objects Functions

### objectClone

▸ **objectClone**<`I`\>(...`objects`): `I`

Deep clones an object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`IObject`](README.md#iobject)[] |

#### Returns

`I`

___

### objectCopy

▸ **objectCopy**<`I`\>(`object`, `force?`): `I`

Copy object as JSON (uses JSON.parse/JSON.stringify but won't throw any errors)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `force?` | `boolean` |

#### Returns

`I`

___

### objectExcept

▸ **objectExcept**<`I`\>(`object`, `excluded`): `I`

Returns a new object without the excluded properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | the object to filter |
| `excluded` | `string`[] | the allowed properties |

#### Returns

`I`

___

### objectFilter

▸ **objectFilter**<`I`, `R`\>(`object`, `predicate?`): `R`

Filter an object by a given predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |
| `R` | `Partial`<`I`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `predicate` | [`ObjectPredicate`](README.md#objectpredicate)<`any`\> |

#### Returns

`R`

___

### objectFind

▸ **objectFind**<`T`, `I`\>(`object`, `predicate?`): `T` \| `undefined`

Finds an object property's value that matches the given predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` |  |
| `predicate?` | `string` \| `symbol` \| [`ObjectPredicate`](README.md#objectpredicate)<`any`\> | A string or function that returns a boolean |

#### Returns

`T` \| `undefined`

___

### objectFindEntry

▸ **objectFindEntry**<`T`, `I`\>(`object`, `predicate`): [`string`, `T`] \| `undefined`

Finds an object property's entry [key, value] that matches the given predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `predicate` | `string` \| `symbol` \| [`ObjectPredicate`](README.md#objectpredicate)<`any`\> |

#### Returns

[`string`, `T`] \| `undefined`

___

### objectFindKey

▸ **objectFindKey**<`I`\>(`object`, `predicate`): `string` \| `symbol` \| `undefined`

Finds an object property's name that matches the given predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `predicate` | `string` \| `symbol` \| [`ObjectPredicate`](README.md#objectpredicate)<`any`\> |

#### Returns

`string` \| `symbol` \| `undefined`

___

### objectFlatten

▸ **objectFlatten**<`I`\>(`object`, `prefix?`): `I`

Flattens an object into a single level using dot notation for nested properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `I` | `undefined` |
| `prefix` | `string` | `''` |

#### Returns

`I`

___

### objectGetMethod

▸ **objectGetMethod**<`T`, `I`\>(`object`, `method`, `strict?`): `T` \| `undefined`

Checks if an object has a method with the given name, and returns the method

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `method` | `string` |
| `strict?` | `boolean` |

#### Returns

`T` \| `undefined`

___

### objectHasMethod

▸ **objectHasMethod**<`I`\>(`object`, `method`, `strict?`): `boolean`

Checks if an object has a method with the given name

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `method` | `string` |
| `strict?` | `boolean` |

#### Returns

`boolean`

___

### objectMerge

▸ **objectMerge**<`I`\>(...`objects`): `I`

Merge two or more objects together

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`IObject`](README.md#iobject)[] |

#### Returns

`I`

___

### objectMergeDeep

▸ **objectMergeDeep**<`I`\>(...`objects`): `I`

Merge two or more objects together, recursing child values

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`IObject`](README.md#iobject)[] |

#### Returns

`I`

___

### objectMethods

▸ **objectMethods**<`I`\>(`object`): `string`[]

Returns an array of the given object's available method names

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |

#### Returns

`string`[]

___

### objectOnly

▸ **objectOnly**<`I`\>(`object`, `allowed`): `I`

Returns a new object with only the allowed properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `allowed` | `string`[] |

#### Returns

`I`

___

### objectPull

▸ **objectPull**<`I`\>(`object`, `key`): `any`

Remove a property from an object and return the value

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `key` | `string` |

#### Returns

`any`

___

### objectSort

▸ **objectSort**<`I`\>(`object`): `I`

Sort an object by it's keys

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |

#### Returns

`I`

▸ **objectSort**<`I`\>(`object`, `sortFunction`): `I`

Sort an object by a predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](README.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `sortFunction` | (`a`: [`string`, `unknown`], `b`: [`string`, `unknown`]) => `number` |

#### Returns

`I`

___

## Parsing Functions

### JSONParse

▸ **JSONParse**<`T`\>(`text`, `strict?`): `T` \| `undefined`

Parse a string into JSON

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `strict?` | `boolean` |

#### Returns

`T` \| `undefined`

___

### JSONPrettify

▸ **JSONPrettify**(`data`, `spacer?`): `string`

Pretty print a JSON string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `spacer` | `number` | `2` |

#### Returns

`string`

___

### JSONStringify

▸ **JSONStringify**<`T`\>(`data`, `options?`): `string`

Parse a variable into a JSON string

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T` | `undefined` |
| `options` | `JSONStringifyOptions` | `false` |

#### Returns

`string`

___

### camelCase

▸ **camelCase**(`text`): `string`

Convert a string to camelCase

**`See`**

https://www.npmjs.com/package/just-camel-case

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

___

### initials

▸ **initials**(`text`): `string`

Convert a string to initials

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

___

### kebabCase

▸ **kebabCase**(`text`): `string`

Convert a string to kebab-case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The string to convert |

#### Returns

`string`

___

### limitString

▸ **limitString**(`text`, `limit?`, `suffix?`): `string`

Limit a string to a certain length

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `limit` | `number` | `100` |
| `suffix` | `string` | `'...'` |

#### Returns

`string`

___

### limitWords

▸ **limitWords**(`text`, `limit?`, `suffix?`): `string`

Limit a string to a certain amount of words

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `limit` | `number` | `100` |
| `suffix` | `string` | `'...'` |

#### Returns

`string`

___

### padString

▸ **padString**(`text`, `padding?`, `character?`): `string`

Pad a string on both sides with the given character and length

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `padding` | `number` | `2` |
| `character` | `string` | `' '` |

#### Returns

`string`

___

### parse

▸ **parse**(`value`): `any`

Parse a string into it's primitive type if possible. If not, return the original variable.

**`Example`**

```ts
'123' => 123 | '123.456' => 123.456 | 'true' => true | 'false' => false | 'null' => null | 'undefined' => undefined
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

___

### safeVarName

▸ **safeVarName**(`text`, `replacer?`): `string`

Create a safe javascript variable name from a string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `replacer` | `string` | `''` |

#### Returns

`string`

___

### sleep

▸ **sleep**(`ms`): `Promise`<`unknown`\>

sleep for a given time

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`unknown`\>

___

### slugify

▸ **slugify**(`text`, `replace?`): `string`

Create slug from string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `replace` | `string` | `'-'` |

#### Returns

`string`

___

### snakeCase

▸ **snakeCase**(`text`): `string`

Convert a string to snake_case

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

___

### spaceCase

▸ **spaceCase**(`text`): `string`

Convert a string to space-case

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

___

## Templating Functions

### escapeRegExp

▸ **escapeRegExp**(`text`): `string`

escape regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

___

### escapeReplacement

▸ **escapeReplacement**(`text`): `string`

escape regexp replacement string

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

___

### interpolate

▸ **interpolate**(`text`, `replacements`): `string`

interpolate string with data from object using `{{key}}` syntax or `${key}` syntax

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `replacements` | [`interpolateReplacements`](README.md#interpolatereplacements) |

#### Returns

`string`

___

## Validation Functions

### isArray

▸ **isArray**(`value`): value is [any, ...any[]]

Checks if variable is an array and is not empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is [any, ...any[]]

___

### isAsyncFunction

▸ **isAsyncFunction**<`T`\>(`value`): value is AsyncFunction<T\>

Check if a variable is an async function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is AsyncFunction<T\>

___

### isAwaitable

▸ **isAwaitable**<`T`\>(`value`): value is AsyncFunction<T\> \| Promise<T\>

Check if a variable can be used with await (a Promise or AsyncFunction)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is AsyncFunction<T\> \| Promise<T\>

___

### isBase64

▸ **isBase64**(`content`): `boolean`

Check if a variable is a Base64 string

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`boolean`

___

### isBoolean

▸ **isBoolean**(`value`): value is boolean

Check if a variable is a boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is boolean

___

### isClass

▸ **isClass**(`value`): value is AnyClass

Check if a variable is a class

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is AnyClass

___

### isDate

▸ **isDate**(`value`): value is Date

Check if a variable is a valid date

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Date

___

### isDefined

▸ **isDefined**(`value`): value is undefined

Check if a value is undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is undefined

___

### isEmpty

▸ **isEmpty**(`value`): value is EmptyObject

Check if a value is empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is EmptyObject

▸ **isEmpty**(`value`): value is ""

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

value is ""

▸ **isEmpty**(`value`): value is EmptyArray

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any`[] |

#### Returns

value is EmptyArray

___

### isFunction

▸ **isFunction**(`value`, `strict?`): value is AnyFunction<any\>

Check if a variable is a function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | ``false`` |

#### Returns

value is AnyFunction<any\>

▸ **isFunction**(`value`, `strict`): value is Function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict` | ``true`` |

#### Returns

value is Function

___

### isNullDefined

▸ **isNullDefined**(`value`): value is null

Check if a value is null or undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is null

___

### isNumber

▸ **isNumber**(`value`): value is number

Check if a variable is a number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is number

___

### isObject

▸ **isObject**(`value`, `strict?`): value is Record<any, any\>

Check if a variable is an object and is not null or undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | ``true`` |

#### Returns

value is Record<any, any\>

▸ **isObject**(`value`, `strict`): value is AnyFunction<any\> \| Record<any, any\> \| [any, ...any[]] \| Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict` | ``false`` |

#### Returns

value is AnyFunction<any\> \| Record<any, any\> \| [any, ...any[]] \| Date

___

### isPrimitive

▸ **isPrimitive**(`value`, `includeNullUndefined`): value is BasicVariableType

Check if a variable is a primitive type. i.e. string, boolean, number, or bigint

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `includeNullUndefined` | ``true`` |

#### Returns

value is BasicVariableType

▸ **isPrimitive**(`value`, `includeNullUndefined?`): value is PrimitiveVariableType

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `includeNullUndefined?` | ``false`` |

#### Returns

value is PrimitiveVariableType

___

### isPromise

▸ **isPromise**<`T`\>(`value`): value is Promise<T\>

Check if a variable is a promise

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Promise<T\>

___

### isSet

▸ **isSet**<`T`\>(`value`): value is Set<T\>

Check if a variable is a Set

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Set<T\>

___

### isString

▸ **isString**(`value`): value is string

Check if a variable is a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is string

___

### isType

▸ **isType**(`value`, `type`): value is VariableType

Check if a variable is the given type

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | `string` \| [`VariableTypeDefinition`](README.md#variabletypedefinition) |

#### Returns

value is VariableType

___

## Variables Functions

### clone

▸ **clone**(`value`): `any`

Clone a variable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

___

### count

▸ **count**(`value`, `strict?`): `number`

Count the number of keys in an object \
Count the number of entries in an array \
Count the number of values in a Set \
Get the length of a string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `strict` | `boolean` | `true` |

#### Returns

`number`

___

### isCallable

▸ **isCallable**(`value`, `options?`): `boolean`

Check if a variable is callable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `boolean` \| `Partial`<`isCallableOptions`\> |

#### Returns

`boolean`

___

### isJSONString

▸ **isJSONString**(`value`, `returnValue?`): `any`

Check if a variable is a JSON string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `returnValue` | `boolean` | `false` |

#### Returns

`any`

___

### merge

▸ **merge**(...`values`): `any`[] \| [`IObject`](README.md#iobject)

Merge two or more variables together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] \| [`IObject`](README.md#iobject)[] |

#### Returns

`any`[] \| [`IObject`](README.md#iobject)

___

### mergeDeep

▸ **mergeDeep**(...`values`): `any`[] \| [`IObject`](README.md#iobject)

Merge two or more variables together, recursing child values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] \| [`IObject`](README.md#iobject)[] |

#### Returns

`any`[] \| [`IObject`](README.md#iobject)

___

### typeOf

▸ **typeOf**(`value`): [`VariableType`](README.md#variabletype)

Return a variable's type

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`VariableType`](README.md#variabletype)
