[inherits-ex](../README.md) / [Exports](../modules.md) / extend

# Module: extend

## Table of contents

### References

- [default](extend.md#default-1)

### Functions

- [extend](extend.md#extend)

## References

### default

Renames and re-exports [extend](extend.md#extend)

## Functions

### extend

▸ **extend**(`ctor`, `...superCtors`): `Function`

Extends the prototype of the given constructor with the prototypes of one or more super constructors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The constructor to extend the prototype of. |
| `...superCtors` | `Function`[] | The super constructors whose prototypes should be copied onto the extended prototype. |

#### Returns

`Function`

The extended constructor `ctor`.

#### Defined in

[src/extend.js:10](https://github.com/snowyu/inherits-ex.js/blob/eff18e3/src/extend.js#L10)
