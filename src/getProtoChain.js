var getPrototypeOf = require('./getPrototypeOf');

var objectSuperCtor = getPrototypeOf(Object);

function getProtoChain(ctor, depth) {
  if (depth == null) {
    depth = 0;
  }
  if (depth >= getProtoChain.maxDepth) {
    throw new Error('The maximum depth of nesting is reached.');
  }
  var result = []
  var lastCtor;
  while (ctor && ctor !== objectSuperCtor) {
    var mCtors, name;
    if (lastCtor && (mCtors = lastCtor.mixinCtors_)) {
      mCtors = mCtors.map(function(m) {
        return getProtoChain(m, ++depth);
      });
      name = mCtors;
    } else {
      name = ctor === Object ? "Base" : ctor.name;
    }
    lastCtor = ctor;
    ctor = (ctor.hasOwnProperty('super_') && ctor.super_) || getPrototypeOf(ctor);
    result.push(name);
  }

  return result.reverse();
};

getProtoChain.maxDepth = 10;

module.exports = getProtoChain

