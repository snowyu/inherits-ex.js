[inherits-ex](../README.md) / [Exports](../modules.md) / inherits

# Module: inherits

## Table of contents

### References

- [default](inherits.md#default)

### Functions

- [inherits](inherits.md#inherits)

## References

### default

Renames and re-exports [inherits](inherits.md#inherits)

## Functions

### inherits

▸ **inherits**(`ctor`, `superCtors`, `staticInherit?`): `boolean`

A powerful tool for implementing class inheritance that supports dynamic inheritance and multiple inheritance.

**Features**:

* Supports dynamic inheritance.
* Preserves existing methods and properties in the child class's prototype instead of overwriting them.
* Avoids circular dependencies by checking if the parent class has already inherited from the child class.
* Avoids duplicate inheritance by checking if the child class has already inherited from the parent class.
* Supports multiple inheritance by allowing an array of parent classes to be passed in.
* Optional static members inheritance.

The function is compatible with both ES5 and ES6, as well as older browsers that do not support these
versions of JavaScript. The function also supports CoffeeScript-generated classes.

**Note**:

* When using the `inherits` function, these two properties are added to the constructor function(`ctor`).
  * The `super_` property refers to the parent constructor.
  * The `__super__` property refers to the parent's prototype object,
    which can be used for the `super` keyword in CoffeeScript.
* In addition, the `Class` property is added to the prototype object of the constructor function (`ctor`).
  * This property points to the current class(`ctor`).
  * This property can also be accessed by instances of the class.
  * It is important to note that for the empty constructor, the instance of `ctor` may not be the current class,
    but the `Class` property is always set to the current class for instance.

**`Example`**

```ts
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}

function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
}

Cat.prototype.meow = function() {
  console.log(this.name + ' meows.');
};

inherits(Cat, [Animal]);

const fluffy = new Cat('Fluffy', 'Siamese');
fluffy.speak(); // Output: Fluffy makes a noise.
fluffy.meow(); // Output: Fluffy meows.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | the child class that needs to inherit from the parent class. |
| `superCtors` | `Function` \| `Function`[] | the parent class that the child class needs to inherit from. The first class is the parent of child class ctor, the left classes will be chained(inherits) one by one, if `superCtors` is an array of classes. |
| `staticInherit?` | `boolean` | optional indicating whether or not the static properties of the parent class should be inherited as well. The default value is `true`. |

#### Returns

`boolean`

returns true if inheritance was successful.

#### Defined in

[src/inherits.js:121](https://github.com/snowyu/inherits-ex.js/blob/716ae31/src/inherits.js#L121)
