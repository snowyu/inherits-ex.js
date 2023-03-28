[inherits-ex](../README.md) / [Exports](../modules.md) / replaceCtor

# Module: replaceCtor

## Table of contents

### References

- [default](replaceCtor.md#default)

### Functions

- [replaceCtor](replaceCtor.md#replacector)

## References

### default

Renames and re-exports [replaceCtor](replaceCtor.md#replacector)

## Functions

### replaceCtor

▸ **replaceCtor**(`aObject`, `aClass`): `boolean`

Replace the prototype of an object with the prototype of a given class

**`Example`**

```ts
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('Hello, my name is '+ this.name);
  }
}

class Student {
  constructor(name, major) {
    super(name);
    this.major = major;
  }
  greet() {
    console.log("Hello, I'm student. My name is " + this.name);
  }
}
const mary = new Person('Mary');
mary.greet(); // logs "Hello, my name is Mary"
replaceCtor(mary, Student); // returns true
mary.greet(); // logs "Hello, I'm student. My name is Mary"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | The object whose prototype needs to be replaced |
| `aClass` | `Function` | The class whose prototype should be used to replace the object's prototype |

#### Returns

`boolean`

- Returns true if the object's prototype was successfully replaced, otherwise returns false

#### Defined in

[src/replaceCtor.js:38](https://github.com/snowyu/inherits-ex.js/blob/fe6c4cf/src/replaceCtor.js#L38)
