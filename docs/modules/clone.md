[inherits-ex](../README.md) / [Exports](../modules.md) / \_clone

# Module: \_clone

## Table of contents

### References

- [default](clone.md#default)

### Type Aliases

- [CloneFilterFn](clone.md#clonefilterfn)

### Functions

- [\_clone](clone.md#_clone)

## References

### default

Renames and re-exports [_clone](clone.md#_clone)

## Type Aliases

### CloneFilterFn

Ƭ **CloneFilterFn**<\>: <\>(`name`: `string`, `value`: `any`) => `any`

#### Type declaration

▸ <\>(`name`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

[src/_clone.js:5](https://github.com/snowyu/inherits-ex.js/blob/c5e1b22/src/_clone.js#L5)

## Functions

### \_clone

▸ **_clone**(`dest`, `src`, `filter`): `any`

Clone own properties from src to dest

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `any` |
| `src` | `any` |
| `filter` | [`CloneFilterFn`](clone.md#clonefilterfn) |

#### Returns

`any`

the dest object

#### Defined in

[src/_clone.js:19](https://github.com/snowyu/inherits-ex.js/blob/c5e1b22/src/_clone.js#L19)
