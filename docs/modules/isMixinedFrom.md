[inherits-ex](../README.md) / [Exports](../modules.md) / isMixinedFrom

# Module: isMixinedFrom

## Table of contents

### Namespaces

- [export&#x3D;](isMixinedFrom.export_.md)

### Functions

- [export&#x3D;](isMixinedFrom.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`ctor`, `superCtor`): `boolean`

Check if a constructor is mixed from a specific constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The constructor to check. |
| `superCtor` | `string` \| `Function` | The constructor to check if the `ctor` is mixed from. Can be the name of the constructor. |

#### Returns

`boolean`

- True if `ctor` is mixed from `superCtor`, otherwise false.

#### Defined in

[src/isMixinedFrom.js:9](https://github.com/snowyu/inherits-ex.js/blob/3460e26/src/isMixinedFrom.js#L9)
