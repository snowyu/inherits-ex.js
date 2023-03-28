[inherits-ex](../README.md) / [Exports](../modules.md) / getParentClass

# Module: getParentClass

## Table of contents

### References

- [default](getParentClass.md#default)

### Functions

- [getParentClass](getParentClass.md#getparentclass)

## References

### default

Renames and re-exports [getParentClass](getParentClass.md#getparentclass)

## Functions

### getParentClass

▸ **getParentClass**(`ctor`): `Function`

Returns the parent class constructor of a given constructor(class) or object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `any` | The constructor function or object to get the parent class from. |

#### Returns

`Function`

The parent class constructor or undefined/null if there is no parent class.

#### Defined in

[src/getParentClass.js:11](https://github.com/snowyu/inherits-ex.js/blob/fe6c4cf/src/getParentClass.js#L11)
