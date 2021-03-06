### Inherits-Ex [![npm](https://img.shields.io/npm/v/inherits-ex.svg)](https://npmjs.org/package/inherits-ex)

[![Join the chat at https://gitter.im/snowyu/inherits-ex.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/snowyu/inherits-ex.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://img.shields.io/travis/snowyu/inherits-ex.js/master.png)](http://travis-ci.org/snowyu/inherits-ex.js)
[![Code Climate](https://codeclimate.com/github/snowyu/inherits-ex.js/badges/gpa.svg)](https://codeclimate.com/github/snowyu/inherits-ex.js)
[![Test Coverage](https://codeclimate.com/github/snowyu/inherits-ex.js/badges/coverage.svg)](https://codeclimate.com/github/snowyu/inherits-ex.js/coverage)
[![downloads](https://img.shields.io/npm/dm/inherits-ex.svg)](https://npmjs.org/package/inherits-ex)
[![license](https://img.shields.io/npm/l/inherits-ex.svg)](https://npmjs.org/package/inherits-ex)

Browser-friendly enhanced inheritance fully compatible with standard node.js
[inherits](http://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor)
and coffee-script.

This package modifies and enhances the standard `inherits` from node.js
`util` module in node environment. It also has a shim for old
browsers with no `Object.create` support.

Differs from the standard implementation is:

+ coffee-script supports
+ static inheritance
+ multi-inheritances(inheritance chain) supports
+ inherits at anytime.
  * you can not declare method/property before inherits in the standard way for it will replace the prototype object.
+ duplication inheritance check
+ Es6 Class supports
+ more helper functions

The standard `inherits` implementation is in `inherits-ex/lib/inheritsDirectly`,
of casue it's the coffee-script supports and browser-friendly.

# API

## inherits(ctor, superCtor|superCtor[], staticInherit = true)

* `staticInherit` (*boolean*): whether static inheritance,defaults to true.

```js
  var inherits = require('inherits-ex/lib/inherits')
```

The enhanced `inherits` implementation.

+ coffee-script supports
+ multi-inheritances(inheritance chain) supports
+ inherits at anytime.
  * you can not declare method/property before inherits in the standard way for it will replace the prototype object.
+ duplication inheritance check
+ add the `super_` property(the super ctor) to the ctor.
+ add the `__super__` property(the super's prototype) to the ctor for the coffeeScirpt `super` keyword.
+ add the `Class` property(point to the current class) to the object's prototype.
  * just be care: the ctor may not be the current class.

### usage

```coffee

assert = require('assert')
inherits = require('inherits-ex/lib/inherits')
isInheritedFrom = require('inherits-ex/lib/isInheritedFrom')
log = console.log.bind console

class Root
  m: -> log('root')

class A
  inherits A, Root
  m: ->
    log('A')
    super

class B
  inherits B, Root
  m: ->
    log('B')
    super

class MyClass
  # MyClass -> A -> Root
  inherits MyClass, B
  # MyClass -> A -> B -> Root
  inherits MyClass, A

assert.notOk inherits(A, Root) #duplication inheritances prohibited.
assert.ok isInheritedFrom(MyClass, A)
assert.ok isInheritedFrom(MyClass, Root)
assert.ok isInheritedFrom(MyClass, B)

```

and the following codes do same thing:

```coffee

class Root
  @static: 1
  m: -> log('root')

class A
  m: ->
    log('A')
    super

class B
  m: ->
    log('B')
    super

class MyClass
  # create inheritances chain:
  # MyClass -> A -> B -> Root
  inherits MyClass, [A, B, Root]

assert.ok isInheritedFrom(MyClass, A)
assert.ok isInheritedFrom(MyClass, Root)
assert.ok isInheritedFrom(MyClass, B)
assert.equal MyClass.static, 1
```

## inheritsDirectly(ctor, superCtor, staticInherit = true)

* `staticInherit` (*boolean*): whether static inheritance,defaults to true.

```js
  var inheritsDirectly = require('inherits-ex/lib/inheritsDirectly')
```

The standard `inherits` implementation in node.js environment with coffee-script supports
and browser-friendly.

## isInheritedFrom(ctor, superCtor|superCtorName, raiseError=false)

```js
  var isInheritedFrom = require('inherits-ex/lib/isInheritedFrom')
```

return the superCtor's son if ctor is inherited from superCtor.
else return false.

it will use the ctor.name to check whether inherited from superCtorName.

## mixin(ctor, superCtor|superCtor[], options:{ filter: number|function})

* options:
  * filter: defaults to 0.
    * `0`: copy all properties(methods)
    * `1`: raise error if found a method using `super`
    * `2`: skip these methods which using `super`
    * `string[]`: only name in the array of string will be copied.
    * `function(name, value){return value}` the callback function of filter.
      * name: the property name
      * value: the property value.

```js
  var mixin = require('inherits-ex/lib/mixin')
```

mixin all superCtors to ctor.

+ duplication mixin or inheritance check
+ **NOTE:**:the methods in mixins using `super()` will jump to the old class(not stay on the class).
* The mixined properties(methods) are cloned(copied) from superCtors
* The all mixined properties(methods) are the first parent's ctor(`MixinCtor_`)
  * eg, `ctor -> MixinCtor_ -> original parents`

``` coffee
## Coffee@2.x
mCallOrder = []
class Root

class C extends Root
  m: ->
    mCallOrder.push 'C'
    super

class A
  m: ->
    mCallOrder.push 'A'

class A1 extends A
  m: ->
    mCallOrder.push 'A1'
    super

class B
  inherits B, Root

class B1 extends B
  m: ->
    mCallOrder.push 'B1'
    super

mixin(B1, [A1, C]).should.be.equal true, 'mixin'
o = new B1()
o.m("a", 12) # call chain: B1::m -> C::m
A::m.should.have.been.calledOnce
A::m.should.have.been.calledWith "a", 12
mCallOrder.should.be.deep.equal ['B1', 'C']
```

The inheritance chain: `B1 -> MixinCtor_ -> B -> Root`
All mixins will be added to `MixinCtor_`.

## isMixinedFrom(ctor, superCtor|superCtorName)

check the ctor whether is mixined from superCtor.

```js
  var isMixinedFrom = require('inherits-ex/lib/isMixinedFrom')
```

## createCtor(name, args, body)

Create a constructor(class) dynamically.

* `name`(*string*): the class name
* `args`(*any[]*): the optional constructor's args.
* `body`(*string*): the optional constructor function body.

```js
  const createClass = require('inherits-ex/lib/createCtor')
  const MyClass = createClass('MyClass', ['a', 'b'], 'this.sum = a + b');
  var my = new MyClass(1, 2);
  console.log(my.sum);
```


## createObject(ctor, args...)

The helper function to create the object dynamically.

```js
  var createObject = require('inherits-ex/lib/createObject')
  class MyClass {
    constructor(a,b) {
      this.sum = a + b;
    }
  }
  var o = creatObject(MyClass, 1, 2)
  console.log(o.sum)
```

NOTE: DO NOT SUPPORT ES6 Class

### usage

```coffee

class RefObject
  constructor: -> @initialize.apply @, arguments
class MyObject
  inherits MyObject, RefObject
  initialize: (@a,@b)->
    super

obj = createObject(MyObject, "a", "b")
#obj = new MyObject("a", "b") # it will have no property a and b.
assert.equal obj.a "a"
assert.equal obj.b "b"


```
## createObjectWith(ctor, [args...])

The helper function to create the object dynamically.

```js
  var createObjectWith = require('inherits-ex/lib/createObjectWith')
```

NOTE: DO NOT SUPPORT ES6 Class


## createFunction(name, [args,] body[, scope[, values]])

* arguments:
  * `name` *(String)*: the function name
  * `args` *(Array)*: the function argument list. it's optional.
  * `body` *(String)*: the function body.
  * ``scope` *(Object|Array)*: the optional function scope.
    * ignore the `values`  if it's an object.
    * the `value` is requierd if it's an array. It's the key's name list
  * `value` *(Array)*: the optional function scope's value list. only for the `scope` is the Array.

The helper function to create the function dynamically.

```js
  var createFunction = require('inherits-ex/lib/createFunction')
```

### usage

```coffee

class RefObject
  constructor: -> @initialize.apply @, arguments
class MyObject
  inherits MyObject, RefObject
  initialize: (@a,@b)->
    super

obj = createObject(MyObject, "a", "b")
#obj = new MyObject("a", "b") # it will have no property a and b.
assert.equal obj.a "a"
assert.equal obj.b "b"


```
