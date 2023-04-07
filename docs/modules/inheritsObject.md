[inherits-ex](../README.md) / [Exports](../modules.md) / inheritsObject

# Module: inheritsObject

## Table of contents

### References

- [default](inheritsObject.md#default)

### Functions

- [inheritsObject](inheritsObject.md#inheritsobject)

## References

### default

Renames and re-exports [inheritsObject](inheritsObject.md#inheritsobject)

## Functions

### inheritsObject

▸ **inheritsObject**(`aObject`, `aClass`, `staticInherit`): `boolean`

Sets the prototype of an object to a new prototype, and inherits from a given class.

make sure the aClass.prototype hook to the aObject instance.

**`Example`**

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person('John');
const jane = {name: 'Jane'};

// make object Inherit from Person
inheritsObject(jane, Person);

// Now jane's prototype is Person, and she can call sayHello
jane.sayHello(); // logs "Hello, my name is Jane"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | The object whose prototype needs to be set. |
| `aClass` | `Function` | The class to inherit from. |
| `staticInherit` | `boolean` | Whether to inherit static properties or not. |

#### Returns

`boolean`

- Whether the prototype was successfully set or not.

#### Defined in

[src/inheritsObject.js:37](https://github.com/snowyu/inherits-ex.js/blob/a0c491f/src/inheritsObject.js#L37)
