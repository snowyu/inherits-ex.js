[inherits-ex](../README.md) / [Exports](../modules.md) / get-class-by-name

# Module: get-class-by-name

## Table of contents

### Namespaces

- [export&#x3D;](get_class_by_name.export_.md)

### Functions

- [export&#x3D;](get_class_by_name.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`aClassName`, `aScope`, `aValues`): `Function`

Retrieve a class from the registered classes in the scope by its name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClassName` | `string` \| `Function` | The class name or class. if it's class return it directly. |
| `aScope` | `Function` \| `string`[] \| `Function`[] \| { `[name: string]`: `Function`;  } | The scope with all registered classes. it'll be called to find the class if the aScope is a `function(className):Function` |
| `aValues` | `Function`[] | If `aScope` is an array of strings, then `aValues` must exist and can only be an array of corresponding classes. |

#### Returns

`Function`

return the found class or undefined

#### Defined in

[src/get-class-by-name.js:42](https://github.com/snowyu/inherits-ex.js/blob/3460e26/src/get-class-by-name.js#L42)
