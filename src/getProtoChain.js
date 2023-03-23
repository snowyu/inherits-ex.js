var getPrototypeOf = require('./getPrototypeOf');

var objectSuperCtor = getPrototypeOf(Object);

/**
 * Returns an array of the names of constructors in the prototype chain of the given constructor.
 *
 * **Note**: the `getProtoChain.maxDepth` for `mixinCtors` is 10, You can change it.
 *
 * @param {function} ctor - The constructor to get the prototype chain of.
 * @throws {Error} When the maximum depth of nesting is reached.
 * @returns {Array.<string>} An array of the names of constructors in the prototype chain of the given constructor.
 */function getProtoChain(ctor, depth) {
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

