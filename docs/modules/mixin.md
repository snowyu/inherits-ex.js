[inherits-ex](../README.md) / [Exports](../modules.md) / mixin

# Module: mixin

## Table of contents

### Namespaces

- [export&#x3D;](mixin.export_.md)

### Type Aliases

- [FilterFn](mixin.md#filterfn)

### Functions

- [export&#x3D;](mixin.md#export&#x3D;)

## Type Aliases

### FilterFn

Ƭ **FilterFn**<\>: <\>(`name`: `string`, `value`: `any`) => `any`

#### Type declaration

▸ <\>(`name`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

[src/mixin.js:309](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/mixin.js#L309)

## Functions

### export&#x3D;

▸ **export=**(`ctor`, `superCtors`, `options`): `boolean`

Mixes the methods and properties from one or more classes to the target class.

By default, all properties and methods from the `superCtors` will be cloned into the internal `mixinCtor_`
constructor of the target class(`ctor`). This can be customized by providing the `options.filter` parameter.

If the target class does not already have a `mixinCtor_` constructor it'll create the new constructor
`mixinCtor_` which is then inherited by the `ctor`(target class). The `mixinCtor_` is also set as a property of the
`ctor`.

**Note**:

1. If a property or method exists with the same name in both `superCtors` and `ctor`'s `mixinCtor_`, the property
   or method in the `superCtor` takes precedence. The last one will overwrite the previous one.
2. the `mixin` does not create a prototype chain between "`superCtors`"(just copy the members from `superCtors`), so
   you cannot clone these methods of `superCtor` which use the `super()`. If you need to use `super()` in these
   methods, you should use `inherits` instead of `mixin`.

**`Example`**

```ts
class MixinA {
  methodA() {
    console.log('Method A called');
  }
}

class MixinB {
  methodB() {
    console.log('Method B called');
  }
}

class MyClass {
  constructor() {
  }
}

// mixin both MixinA and MixinB
mixins(MyClass, [MixinA, MixinB]); // == mixins(MyClass, MixinA); mixins(MyClass, MixinB);

const myObj = new MyClass();

myObj.methodA(); // logs 'Method A called'
myObj.methodB(); // logs 'Method B called'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | `Function` | the target class that needs to mixin from the `superCtors` class. |
| `superCtors` | `Function` \| `Function`[] | The class(es) to be used as sources of properties and methods. |
| `options` | `any` | - |

#### Returns

`boolean`

return true if successful

#### Defined in

[src/mixin.js:422](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/mixin.js#L422)
