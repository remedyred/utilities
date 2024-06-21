[**@snickbit/utilities**](../README.md) • **Docs**

***

# Function: debounceAsync()

> **debounceAsync**\<`F`\>(`fn`, `delay`): (...`args`) => `Promise`\<`unknown`\>

Debounce a function asynchronously, returning a promise

## Type parameters

• **F** *extends* [`TFunction`](../type-aliases/TFunction.md)\<[`AnyFunction`](../interfaces/AnyFunction.md)\<`any`\>\>

## Parameters

• **fn**: `F`

• **delay**: `number`= `50`

## Returns

`Function`

### Parameters

• ...**args**: `Parameters`\<`F`\>

### Returns

`Promise`\<`unknown`\>
