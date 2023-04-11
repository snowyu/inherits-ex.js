[inherits-ex](../README.md) / [Exports](../modules.md) / isMixinedFromStr

# Module: isMixinedFromStr

## Table of contents

### References

- [default](isMixinedFromStr.md#default)

### Functions

- [isMixinedFromStr](isMixinedFromStr.md#ismixinedfromstr)

## References

### default

Renames and re-exports [isMixinedFromStr](isMixinedFromStr.md#ismixinedfromstr)

## Functions

### isMixinedFromStr

▸ **isMixinedFromStr**(`ctor`, `superStr`): `boolean`

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

[src/isMixinedFromStr.js:7](https://github.com/snowyu/inherits-ex.js/blob/d55cbee/src/isMixinedFromStr.js#L7)
