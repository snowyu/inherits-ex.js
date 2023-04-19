[inherits-ex](../README.md) / [Exports](../modules.md) / getProtoChain

# Module: getProtoChain

## Table of contents

### References

- [default](getProtoChain.md#default)

### Namespaces

- [getProtoChain](getProtoChain.getProtoChain.md)

### Functions

- [getProtoChain](getProtoChain.md#getprotochain)

## References

### default

Renames and re-exports [getProtoChain](getProtoChain.md#getprotochain)

## Functions

### getProtoChain

▸ **getProtoChain**(`ctor`, `depth`): `string`[]

Returns an array of the names of constructors in the prototype chain of the given constructor.

**Note**: the `getProtoChain.maxDepth` for `mixinCtors` is 10, You can change it.

**`Throws`**

If the maximum depth of nesting is reached.

**`Example`**

```ts
// Define a class hierarchy
class Animal {}
class Mammal extends Animal {}
class Cat extends Mammal {}

// Get the prototype chain of the Cat class
const protoChain = getProtoChain(Cat);
console.log(protoChain); // Output: ["Animal", "Mammal","Cat"]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The constructor to get the prototype chain of. |
| `depth` | `any` | - |

#### Returns

`string`[]

An array of the names of constructors in the prototype chain of the given constructor.

#### Defined in

[src/getProtoChain.js:23](https://github.com/snowyu/inherits-ex.js/blob/eff18e3/src/getProtoChain.js#L23)
