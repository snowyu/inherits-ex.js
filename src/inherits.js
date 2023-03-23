var isArray           = Array.isArray;
var isInheritedFrom   = require('./isInheritedFrom');
var inheritsDirectly  = require('./inheritsDirectly');
var getPrototypeOf    = require('./getPrototypeOf');
var defineProperty    = require('./defineProperty');
var getParentCtor     = require('./getParentClass');

var objectSuperCtor = getPrototypeOf(Object);

/**
 * Inherit the prototype properties and methods from one constructor into another.
 *
 * @param {function} ctor the class which needs to inherit the prototype.
 * @param {function} superCtor the parent class to inherit prototype from.
 * @param {boolean=true} staticInherit whether allow static members inheritance, defaults to true.
 * @returns The function returns true if inheritance was successful.
 */
function _inherits(ctor, superCtor, staticInherit) {
  var v  = getParentCtor(ctor);
  var mixinCtor = ctor.mixinCtor_;
  if (mixinCtor && v === mixinCtor) {
    ctor = mixinCtor;
    v = getParentCtor(ctor);
  }
  var result = false;
  var isInherited = isInheritedFrom(ctor, superCtor)
  if (!isInherited && !isInheritedFrom(superCtor, ctor)) {
    inheritsDirectly(ctor, superCtor, staticInherit);
    // patch the missing prototype chain if exists ctor.super.
    while (v != null && v !== objectSuperCtor && superCtor !== v) {
      ctor = superCtor;
      superCtor = v;
      inheritsDirectly(ctor, superCtor, staticInherit);
      v = getParentCtor(ctor);
    }
    result = true;
  } else if (isInherited) {
    // additional properties
    if (!ctor.hasOwnProperty('super_')) {
      defineProperty(ctor, 'super_', superCtor);
      defineProperty(ctor.prototype, 'Class', ctor)
    }
    if (!ctor.hasOwnProperty('__super__')) {
      defineProperty(ctor, '__super__', superCtor.prototype);
    }
  }
  return result;
}

/**
 * A powerful tool for implementing class inheritance that supports dynamic inheritance and multiple inheritance.
 *
 * **Features**:
 *
 * * Supports dynamic inheritance.
 * * Preserves existing methods and properties in the child class's prototype instead of overwriting them.
 * * Avoids circular dependencies by checking if the parent class has already inherited from the child class.
 * * Avoids duplicate inheritance by checking if the child class has already inherited from the parent class.
 * * Supports multiple inheritance by allowing an array of parent classes to be passed in.
 * * Optional static members inheritance.
 *
 * The function is compatible with both ES5 and ES6, as well as older browsers that do not support these
 * versions of JavaScript. The function also supports CoffeeScript-generated classes.
 *
 * @param {Function} ctor the child class that needs to inherit from the parent class.
 * @param {Function|Function[]} superCtors the parent class that the child class needs to inherit from.
 *   The first class is the parent of child class ctor, the left classes will be chained(inherits) one by one,
 *   if `superCtors` is an array of classes.
 * @param {boolean=true} staticInherit optional indicating whether or not the static properties of the parent class should be inherited as well.
 * @returns {boolean} returns true if inheritance was successful.
 */
module.exports = function inherits(ctor, superCtors, staticInherit) {
  if (!isArray(superCtors)) return _inherits(ctor, superCtors, staticInherit);
  for (var i = superCtors.length - 1; i >= 0; i--) {
    if (!_inherits(ctor, superCtors[i], staticInherit)) return false;
  }
  return true;
}
