[inherits-ex](../README.md) / [Exports](../modules.md) / createObject

# Module: createObject

## Table of contents

### References

- [default](createObject.md#default)

### Functions

- [createObject](createObject.md#createobject)

## References

### default

Renames and re-exports [createObject](createObject.md#createobject)

## Functions

### createObject

▸ **createObject**(`aClass`, `...args`): `any`

Creates a new instance of the given class using the specified arguments.

**`Example`**

```ts
// Define a class
class Person {
  constructor(name, age) {
   this.name = name;
   this.age = age;
  }
}
// Create a new instance of the Person class
const john = createObject(Person, 'John', 30);
console.log(john); // Output: Person { name: 'John', age: 30 }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | `Function` | The class to instantiate. |
| `...args` | `any` | The arguments to pass to the constructor of the class. |

#### Returns

`any`

- A new instance of the class.

#### Defined in

[src/createObject.js:24](https://github.com/snowyu/inherits-ex.js/blob/fe6c4cf/src/createObject.js#L24)
