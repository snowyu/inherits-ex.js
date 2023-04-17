[inherits-ex](../README.md) / [Exports](../modules.md) / isInheritedFrom

# Module: isInheritedFrom

## Table of contents

### Namespaces

- [export&#x3D;](isInheritedFrom.export_.md)

### Functions

- [export&#x3D;](isInheritedFrom.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`ctor`, `superCtor`, `throwError`): `boolean` \| `Function`

Determines if a constructor(class) is inherited from a given super constructor(class).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The constructor function to check. |
| `superCtor` | `string` \| `Function` | The super constructor to check for inheritance. Can be the name of the super constructor. |
| `throwError` | `any` | If true, an error will be thrown if a circular inheritance is found. |

#### Returns

`boolean` \| `Function`

- If the constructor is inherited from the super constructor, returns the constructor.
  Otherwise, returns false.

#### Defined in

[src/isInheritedFrom.js:15](https://github.com/snowyu/inherits-ex.js/blob/3460e26/src/isInheritedFrom.js#L15)
