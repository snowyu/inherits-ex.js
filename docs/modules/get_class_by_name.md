[inherits-ex](../README.md) / [Exports](../modules.md) / get-class-by-name

# Module: get-class-by-name

## Table of contents

### References

- [default](get_class_by_name.md#default)

### Functions

- [getClassByName](get_class_by_name.md#getclassbyname)

## References

### default

Renames and re-exports [getClassByName](get_class_by_name.md#getclassbyname)

## Functions

### getClassByName

▸ **getClassByName**(`aClassName`, `aScope`, `aValues`): `Function`

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

[src/get-class-by-name.js:40](https://github.com/snowyu/inherits-ex.js/blob/fe6c4cf/src/get-class-by-name.js#L40)
