[inherits-ex](../README.md) / [Exports](../modules.md) / \_clone

# Module: \_clone

## Table of contents

### References

- [default](clone.md#default)

### Type Aliases

- [CloneFilterFn](clone.md#clonefilterfn)

### Functions

- [\_clone](clone.md#_clone)
- [cloneCtor](clone.md#clonector)
- [clonePrototype](clone.md#cloneprototype)

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

[src/_clone.js:8](https://github.com/snowyu/inherits-ex.js/blob/696e49c/src/_clone.js#L8)

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

[src/_clone.js:22](https://github.com/snowyu/inherits-ex.js/blob/696e49c/src/_clone.js#L22)

___

### cloneCtor

▸ **cloneCtor**(`dest`, `src`, `filter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `any` |
| `src` | `any` |
| `filter` | `any` |

#### Returns

`void`

#### Defined in

[src/_clone.js:38](https://github.com/snowyu/inherits-ex.js/blob/696e49c/src/_clone.js#L38)

___

### clonePrototype

▸ **clonePrototype**(`dest`, `src`, `filter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `any` |
| `src` | `any` |
| `filter` | `any` |

#### Returns

`void`

#### Defined in

[src/_clone.js:47](https://github.com/snowyu/inherits-ex.js/blob/696e49c/src/_clone.js#L47)
