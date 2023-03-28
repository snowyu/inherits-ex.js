[inherits-ex](../README.md) / [Exports](../modules.md) / isInheritedFromStr

# Module: isInheritedFromStr

## Table of contents

### Namespaces

- [export&#x3D;](isInheritedFromStr.export_.md)

### Functions

- [export&#x3D;](isInheritedFromStr.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`ctor`, `superStr`, `throwError`): `boolean` \| `Function`

Determines if a constructor(class) is inherited from a given the name of super constructor(class).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The constructor function to check. |
| `superStr` | `string` | The super constructor's name to check for inheritance. |
| `throwError` | `any` | If true, an error will be thrown if a circular inheritance is found. |

#### Returns

`boolean` \| `Function`

- If the constructor is inherited from the super constructor, returns the constructor.
  Otherwise, returns false.

#### Defined in

[src/isInheritedFromStr.js:11](https://github.com/snowyu/inherits-ex.js/blob/2bbec9d/src/isInheritedFromStr.js#L11)
