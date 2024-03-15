[inherits-ex](../README.md) / [Exports](../modules.md) / inheritsDirectly

# Module: inheritsDirectly

## Table of contents

### References

- [default](inheritsDirectly.md#default)

### Functions

- [inheritsDirectly](inheritsDirectly.md#inheritsdirectly)

## References

### default

Renames and re-exports [inheritsDirectly](inheritsDirectly.md#inheritsdirectly)

## Functions

### inheritsDirectly

▸ **inheritsDirectly**(`ctor`, `superCtor`, `staticInherit?`): `void`

Enables dynamic prototypal inheritance between classes, allowing for flexible and reusable code.

The `inheritsDirectly` function is compatible with both ES5 and ES6, as well as older browsers that do not support these versions of JavaScript.
The function also supports CoffeeScript-generated classes

**Note**: If a parent class already exists on the class, it will be replaced by the new parent class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | The child class that will inherit from the parent class. |
| `superCtor` | `Function` | The parent class from which the child class will inherit. |
| `staticInherit?` | `boolean` | Optional A boolean flag indicating whether the child class should also inherit static properties and methods from the parent class. The default value is `true`. |

#### Returns

`void`

#### Defined in

[src/inheritsDirectly.js:20](https://github.com/snowyu/inherits-ex.js/blob/ec2431d/src/inheritsDirectly.js#L20)
