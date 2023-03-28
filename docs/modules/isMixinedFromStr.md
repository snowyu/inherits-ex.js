[inherits-ex](../README.md) / [Exports](../modules.md) / isMixinedFromStr

# Module: isMixinedFromStr

## Table of contents

### Namespaces

- [export&#x3D;](isMixinedFromStr.export_.md)

### Functions

- [export&#x3D;](isMixinedFromStr.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`ctor`, `superStr`): `boolean`

Check if a constructor is mixed from a specific constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The constructor to check. |
| `superStr` | `string` | The name of constructor to check if the `ctor` is mixed from. |

#### Returns

`boolean`

- True if `ctor` is mixed from `superCtor`, otherwise false.

#### Defined in

[src/isMixinedFromStr.js:7](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/isMixinedFromStr.js#L7)
