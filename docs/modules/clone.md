[inherits-ex](../README.md) / [Exports](../modules.md) / \_clone

# Module: \_clone

## Table of contents

### Namespaces

- [export&#x3D;](clone.export_.md)

### Type Aliases

- [CloneFilterFn](clone.md#clonefilterfn)

### Functions

- [export&#x3D;](clone.md#export&#x3D;)

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

[src/_clone.js:5](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/_clone.js#L5)

## Functions

### export&#x3D;

▸ **export=**(`dest`, `src`, `filter`): `any`

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

[src/_clone.js:19](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/_clone.js#L19)
