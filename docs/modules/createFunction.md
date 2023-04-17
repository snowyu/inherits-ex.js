[inherits-ex](../README.md) / [Exports](../modules.md) / createFunction

# Module: createFunction

## Table of contents

### References

- [default](createFunction.md#default)

### Functions

- [createFunction](createFunction.md#createfunction)

## References

### default

Renames and re-exports [createFunction](createFunction.md#createfunction)

## Functions

### createFunction

▸ **createFunction**(`name`, `aArgs`, `body`, `scope?`, `values?`, `...args`): `Function`

Creates a new function with the given name, arguments, body, scope, and values.

**`Example`**

```ts
var fn = createFunction('yourFuncName', ['arg1', 'arg2'], 'return log(arg1+arg2);', {log:console.log.bind(console)});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the function. |
| `aArgs` | `string` \| `string`[] | The argument names of the function if it's `string[]`, else it's the function body without arguments. |
| `body` | `string` | The body of the function. |
| `scope?` | `any` | The scope of the function. |
| `values?` | `any`[] | The values of the `scope` if the `scope` is `string[]``. |
| `...args` | `any` | - |

#### Returns

`Function`

- The created function.

#### Defined in

[src/createFunction.js:32](https://github.com/snowyu/inherits-ex.js/blob/c5e1b22/src/createFunction.js#L32)
