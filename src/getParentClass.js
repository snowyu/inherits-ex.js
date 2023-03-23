var getPrototypeOf = require('./getPrototypeOf');

/**
 * get the parent class(ctor) of the ctor
 * @param {Function} ctor
 * @returns {Function} the parent ctor
 */
function getParentClass(ctor) {
  // get the internal __proto__([[prototype]]) property
  return ctor.super_ || getPrototypeOf(ctor)
}

module.exports = getParentClass
