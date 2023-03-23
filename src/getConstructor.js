var isEmptyFunction = require('./isEmptyFunction')
var getPrototypeOf    = require('./getPrototypeOf');

var objectSuperCtor = getPrototypeOf(Object);

//get latest non-empty constructor function through inherits link

/**
 * Returns the first(latest) non-empty constructor in the inheritance chain of the given constructor that has own properties.
 *
 * @param {function} ctor - The constructor to get the first non-empty constructor of.
 * @returns {function} The first(latest) non-empty constructor in the inheritance chain of the given constructor.
 */
function getConstructor(ctor) {
  var result = ctor;
  var isEmpty = isEmptyFunction(result);
  var v  = result.super_ || getPrototypeOf(result);
  while (isEmpty && v && v !== objectSuperCtor) {
    result  = v;
    v  = result.super_ || getPrototypeOf(result);
    isEmpty = isEmptyFunction(result);
  }
  return result;
}

module.exports = getConstructor
