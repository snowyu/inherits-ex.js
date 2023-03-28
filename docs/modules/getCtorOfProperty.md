[inherits-ex](../README.md) / [Exports](../modules.md) / getCtorOfProperty

# Module: getCtorOfProperty

## Table of contents

### References

- [default](getCtorOfProperty.md#default)

### Functions

- [getCtorOfOwnProperty](getCtorOfProperty.md#getctorofownproperty)

## References

### default

Renames and re-exports [getCtorOfOwnProperty](getCtorOfProperty.md#getctorofownproperty)

## Functions

### getCtorOfOwnProperty

▸ **getCtorOfOwnProperty**(`aClass`, `aPropertyName`): `Function`

Traverses the prototype chain of a given class to find the class(ctor) that contains a given property, returning the real class that owns the property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | `Function` | The class to start the search from |
| `aPropertyName` | `string` | The name of the property |

#### Returns

`Function`

return the class of OwnProperty, or undefined if not found

#### Defined in

[src/getCtorOfProperty.js:9](https://github.com/snowyu/inherits-ex.js/blob/fe6c4cf/src/getCtorOfProperty.js#L9)
