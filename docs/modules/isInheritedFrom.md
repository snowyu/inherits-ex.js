[inherits-ex](../README.md) / [Exports](../modules.md) / isInheritedFrom

# Module: isInheritedFrom

## Table of contents

### References

- [default](isInheritedFrom.md#default)

### Functions

- [isInheritedFrom](isInheritedFrom.md#isinheritedfrom)

## References

### default

Renames and re-exports [isInheritedFrom](isInheritedFrom.md#isinheritedfrom)

## Functions

### isInheritedFrom

▸ **isInheritedFrom**(`ctor`, `superCtor`, `throwError?`): `boolean` \| `Function`

Determines if a constructor(class) is inherited from a given super constructor(class).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The constructor function to check. |
| `superCtor` | `string` \| `Function` | The super constructor to check for inheritance. Can be the name of the super constructor. |
| `throwError?` | `boolean` | If true, an error will be thrown if a circular inheritance is found. defaults to false. |

#### Returns

`boolean` \| `Function`

- If the constructor is inherited from the super constructor, returns the constructor.
  Otherwise, returns false.

#### Defined in

[src/isInheritedFrom.js:15](https://github.com/snowyu/inherits-ex.js/blob/ec2431d/src/isInheritedFrom.js#L15)
