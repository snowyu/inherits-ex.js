[inherits-ex](../README.md) / [Exports](../modules.md) / isEmptyFunction

# Module: isEmptyFunction

## Table of contents

### References

- [default](isEmptyFunction.md#default)

### Functions

- [isEmptyFunction](isEmptyFunction.md#isemptyfunction)

## References

### default

Renames and re-exports [isEmptyFunction](isEmptyFunction.md#isemptyfunction)

## Functions

### isEmptyFunction

▸ **isEmptyFunction**(`aFunc`): `boolean`

Checks whether a given function is empty or not.

**`Example`**

```ts
isEmptyFunction(Array.prototype.push); // -> false
isEmptyFunction(()=>{}); // -> true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aFunc` | `Function` | The function to be checked. |

#### Returns

`boolean`

- True if the function is empty, false otherwise.

#### Defined in

[src/isEmptyFunction.js:12](https://github.com/snowyu/inherits-ex.js/blob/eff18e3/src/isEmptyFunction.js#L12)
