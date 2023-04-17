[inherits-ex](../README.md) / [Exports](../modules.md) / getSuper

# Module: getSuper

## Table of contents

### Namespaces

- [export&#x3D;](getSuper.export_.md)

### Functions

- [export&#x3D;](getSuper.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`instance`, `cache`): `any`

Returns a proxy object that provides access to the methods of the given instance's parent class.
The returned proxy object behaves like `super` keyword in that it allows accessing parent class instance methods.

**`Throws`**

- If the given instance is not an object or is null.

**`Example`**

```ts
class Animal {
  walk() {
    console.log('Animal walks');
  }
}

class Rabbit extends Animal {
  walk() {
    console.log('Rabbit hops');
    // super.walk();
    getSuper(this).walk(); // call the parent's walk method.
  }
}

const rabbit = new Rabbit();
const superRabbit = getSuper(rabbit);
superRabbit.walk(); // logs 'Animal walks'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instance` | `any` | The instance to get the parent class instance methods from. |
| `cache` | `any` | An optional WeakMap object to cache the proxy object for better performance. defaults to false |

#### Returns

`any`

- A proxy object that provides access to the methods of the given instance's parent class.

#### Defined in

[src/getSuper.js:31](https://github.com/snowyu/inherits-ex.js/blob/3460e26/src/getSuper.js#L31)
