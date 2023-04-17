[inherits-ex](../README.md) / [Exports](../modules.md) / getCtorOfProperty

# Module: getCtorOfProperty

## Table of contents

### Namespaces

- [export&#x3D;](getCtorOfProperty.export_.md)

### Functions

- [export&#x3D;](getCtorOfProperty.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`aClass`, `aPropertyName`): `Function`

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

[src/getCtorOfProperty.js:9](https://github.com/snowyu/inherits-ex.js/blob/3460e26/src/getCtorOfProperty.js#L9)
