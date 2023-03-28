[inherits-ex](../README.md) / [Exports](../modules.md) / [inherits-ex](inherits_ex.md) / export=

# Namespace: export=

[inherits-ex](inherits_ex.md).export=

## Table of contents

### Variables

- [requireClass](inherits_ex.export_.md#requireclass)
- [scope](inherits_ex.export_.md#scope)

### Functions

- [addClass](inherits_ex.export_.md#addclass)
- [execute](inherits_ex.export_.md#execute)
- [getClass](inherits_ex.export_.md#getclass)
- [setScope](inherits_ex.export_.md#setscope)

## Variables

### requireClass

• **requireClass**: (`aClassName`: `string` \| `Function`, `aScope`: `Function` \| `string`[] \| `Function`[] \| { `[name: string]`: `Function`;  }, `aValues`: `Function`[]) => `Function`

#### Type declaration

▸ (`aClassName`, `aScope`, `aValues`): `Function`

Retrieve a class from the registered classes in the scope by its name.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClassName` | `string` \| `Function` | The class name or class. if it's class return it directly. |
| `aScope` | `Function` \| `string`[] \| `Function`[] \| { `[name: string]`: `Function`;  } | The scope with all registered classes. it'll be called to find the class if the aScope is a `function(className):Function` |
| `aValues` | `Function`[] | If `aScope` is an array of strings, then `aValues` must exist and can only be an array of corresponding classes. |

##### Returns

`Function`

return the found class or undefined

#### Defined in

[src/inherits-ex.js:58](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/inherits-ex.js#L58)

___

### scope

• **scope**: `Object`

#### Defined in

[src/inherits-ex.js:60](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/inherits-ex.js#L60)

## Functions

### addClass

▸ **addClass**(`aName`, `ctor`): `void`

Add the class to the scope

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aName` | `string` | the class name |
| `ctor` | `any` | the class |

#### Returns

`void`

#### Defined in

[src/inherits-ex.js:133](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/inherits-ex.js#L133)

___

### execute

▸ **execute**(`ctor`, `superCtors`, `aScope`, `aValues`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `any` |
| `superCtors` | `any` |
| `aScope` | `any` |
| `aValues` | `any` |

#### Returns

`boolean`

#### Defined in

[src/inherits-ex.js:97](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/inherits-ex.js#L97)

___

### getClass

▸ **getClass**(`aClassName`, `aScope`, `aValues`): `Function`

Get the class from class name in scope

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClassName` | `any` | the class name to find |
| `aScope` | `Function` \| `string`[] \| `Function`[] \| { `[name: string]`: `Function`;  } | The optional additional scope with all registered classes. It'll be called to find the class if the aScope is a `function(className):Function`. |
| `aValues` | `Function`[] | If `aScope` is an array of strings, then `aValues` must exist and can only be an array of corresponding classes. |

#### Returns

`Function`

the found class or undefined.

#### Defined in

[src/inherits-ex.js:85](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/inherits-ex.js#L85)

___

### setScope

▸ **setScope**(`aScope`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aScope` | `any` |

#### Returns

`void`

#### Defined in

[src/inherits-ex.js:62](https://github.com/snowyu/inherits-ex.js/blob/5942071/src/inherits-ex.js#L62)
