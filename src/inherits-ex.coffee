###
The enhanced dynamical `inherits` implementation.

```js
  var InheritsEx = require('inherits-ex/lib/inherits-ex')
  var defaultRequire = InheritsEx.requireClass;
  // You should return the proper class(ctor) here.
  InheritsEx.requireClass = function(className, scope){return defaultRequire.apply(null, arguments)};
  var inherits = InheritsEx()
```

The enhanced dynamical `inherits` implementation.

+ load the class via dynamical name.
* requireClass *(Function)*:
* scope *(Object|Array)*: collects the register classes.

The default requireClass is `getClassByName`.

usage:

```coffee
  requireClass = (aClassName)->
    getClassViaName aClassName
  inheritsEx = require('inherits-ex/lib/inherits-ex')(requireClass)
```

###

getClassByName  = require './get-class-by-name'
inherits        = require './inherits'

isFunction      = (value)->typeof value is 'function'
isString        = (value)->typeof value is 'string'
isArray         = Array.isArray

module.exports  = class InheritsEx
  @requireClass: getClassByName
  @execute = (ctor, superCtors, aScope, aValues)->
    requireClass  = InheritsEx.requireClass
    aScope        = InheritsEx.scope unless aScope?
    ctor          = requireClass ctor, aScope, aValues if isString ctor
    if isString superCtors
      superCtors    = requireClass superCtors, aScope, aValues
    else if isArray superCtors
      superCtors = for i in superCtors
        if isString(i) then requireClass(i, aScope, aValues) else i
    inherits ctor, superCtors
  constructor: (aDefaultRequire)->
    InheritsEx.requireClass = aDefaultRequire if isFunction aDefaultRequire
    return InheritsEx.execute

