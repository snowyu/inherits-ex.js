[inherits-ex](../README.md) / [Exports](../modules.md) / defineProperty

# Module: defineProperty

## Table of contents

### References

- [default](defineProperty.md#default)

### Functions

- [defineProperty](defineProperty.md#defineproperty)

## References

### default

Renames and re-exports [defineProperty](defineProperty.md#defineproperty)

## Functions

### defineProperty

▸ **defineProperty**(`object`, `key`, `value`, `aOptions?`): `any`

Define the object's property and value. The property is not enumerable
by default.

**`Example`**

```ts
// Define a non-enumerable data property.
defineProperty(myObject, "myProperty", 42);
```

**`Example`**

```ts
// Define an enumerable accessor property.
defineProperty(myObject, "myAccessorProperty", undefined, {
  enumerable: true,
  get: function() {
    return this._myValue;
  },
  set: function(newValue) {
    this._myValue = newValue;
  }
});
```

**`Example`**

```ts
// Define a non-enumerable, read-only data property.
defineProperty(myObject, "myReadOnlyProperty", "hello", {
  writable: false
});
```

**`Example`**

```ts
// Define an enumerable, configurable data property.
defineProperty(myObject, "myConfigurableProperty", 42, {
  enumerable: true,
  configurable: true
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `any` | The object to define the property on. |
| `key` | `string` | the property name. |
| `value` | `any` | the property value. |
| `aOptions?` | `any` | the property descriptor. |

#### Returns

`any`

The object that was passed to the function, with the specified property added or modified.

#### Defined in

[src/defineProperty.js:58](https://github.com/snowyu/inherits-ex.js/blob/505b794/src/defineProperty.js#L58)
