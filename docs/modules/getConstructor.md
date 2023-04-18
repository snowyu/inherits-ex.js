[inherits-ex](../README.md) / [Exports](../modules.md) / getConstructor

# Module: getConstructor

## Table of contents

### References

- [default](getConstructor.md#default)

### Functions

- [getConstructor](getConstructor.md#getconstructor)

## References

### default

Renames and re-exports [getConstructor](getConstructor.md#getconstructor)

## Functions

### getConstructor

▸ **getConstructor**(`ctor`): `Function`

Returns the first(latest) non-empty constructor in the inheritance chain of the given constructor that has own properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The constructor to get the first non-empty constructor of. |

#### Returns

`Function`

The first(latest) non-empty constructor in the inheritance chain of the given constructor.

#### Defined in

[src/getConstructor.js:12](https://github.com/snowyu/inherits-ex.js/blob/44c1f65/src/getConstructor.js#L12)
