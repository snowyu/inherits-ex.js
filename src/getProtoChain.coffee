getPrototypeOf     = require('./getPrototypeOf');

objectSuperCtor = getPrototypeOf(Object)

module.exports = getProtoChain = (ctor, deepth)->
  deepth?=0
  if deepth >= getProtoChain.maxDeepth
    throw new Error('The maximum depth of nesting is reached.')
  result = while ctor && ctor != objectSuperCtor
    if lastCtor and mctors=lastCtor.mixinCtors_
      mctors = mctors.map (m)->getProtoChain m, ++deepth
      name = mctors
    else
      if ctor is Object
        name = "Base"
      else
        name = ctor.name
    lastCtor = ctor
    ctor = (ctor.hasOwnProperty('super_') && ctor.super_) || getPrototypeOf(ctor)
    name
  result.reverse()

getProtoChain.maxDeepth = 10
