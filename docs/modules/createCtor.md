[inherits-ex](../README.md) / [Exports](../modules.md) / createCtor

# Module: createCtor

## Table of contents

### References

- [default](createCtor.md#default)

### Functions

- [createCtor](createCtor.md#creatector)

## References

### default

Renames and re-exports [createCtor](createCtor.md#creatector)

## Functions

### createCtor

▸ **createCtor**(`name`, `args`, `body`): `Function`

Creates a constructor function dynamically with the given name, arguments, and body.
If the arguments are a string, it is assumed to be the body and the arguments are set to an empty array.
If the body is null or undefined, a default body is created that calls the parent constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the constructor function. |
| `args` | `string` \| `any`[] | The arguments of the constructor function. |
| `body` | `string` | The body of the constructor function. |

#### Returns

`Function`

- The constructor function.

#### Defined in

[src/createCtor.js:15](https://github.com/snowyu/inherits-ex.js/blob/a0c491f/src/createCtor.js#L15)
