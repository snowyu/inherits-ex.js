[inherits-ex](../README.md) / [Exports](../modules.md) / getConstructor

# Module: getConstructor

## Table of contents

### Functions

- [export&#x3D;](getConstructor.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`ctor`): `Function`

Returns the first(latest) non-empty constructor in the inheritance chain of the given constructor that has own properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The constructor to get the first non-empty constructor of. |

#### Returns

`Function`

The first(latest) non-empty constructor in the inheritance chain of the given constructor.

#### Defined in

[src/getConstructor.js:14](https://github.com/snowyu/inherits-ex.js/blob/5eb21fd/src/getConstructor.js#L14)
