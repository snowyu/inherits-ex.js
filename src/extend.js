import {_extend} from './_extend.js';

/**
 * Extends the prototype of the given constructor with the prototypes of one or more super constructors.
 *
 * @param {function} ctor - The constructor to extend the prototype of.
 * @param {...function} superCtors - The super constructors whose prototypes should be copied onto the extended prototype.
 * @returns {function} The extended constructor `ctor`.
 */
export function extend(ctor, ...superCtors) {
  _extend(ctor.prototype, ...superCtors.map(c => c.prototype));
  ctor.prototype.constructor = ctor;
  return ctor;
};

export default extend
