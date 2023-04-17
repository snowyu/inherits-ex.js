[inherits-ex](../README.md) / [Exports](../modules.md) / newPrototype

# Module: newPrototype

## Table of contents

### Namespaces

- [export&#x3D;](newPrototype.export_.md)

### Functions

- [export&#x3D;](newPrototype.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`aClass`, `aConstructor?`): `any`

Creates a new object with a prototype chain from a given class and constructor function.

**Note**: Not used more for can not overwrite the prototype of ctor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | `Function` | The class to use as prototype chain. |
| `aConstructor?` | `Function` | The constructor function for the new object. |

#### Returns

`any`

- The newly created prototype object.

#### Defined in

[src/newPrototype.js:13](https://github.com/snowyu/inherits-ex.js/blob/3460e26/src/newPrototype.js#L13)
