[inherits-ex](../README.md) / [Exports](../modules.md) / getProtoChain

# Module: getProtoChain

## Table of contents

### Namespaces

- [export&#x3D;](getProtoChain.export_.md)

### Functions

- [export&#x3D;](getProtoChain.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`ctor`, `depth`): `string`[]

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
console.log(protoChain); // Output: ["Cat", "Mammal", "Animal", "Base"]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The constructor to get the prototype chain of. |
| `depth` | `any` | - |

#### Returns

`string`[]

An array of the names of constructors in the prototype chain of the given constructor.
  The last element is always the string "Base," which represents the `Object` class that serves as the base for all
  prototype chains.

#### Defined in

[src/getProtoChain.js:27](https://github.com/snowyu/inherits-ex.js/blob/5eb21fd/src/getProtoChain.js#L27)
