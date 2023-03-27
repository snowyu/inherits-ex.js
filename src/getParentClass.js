import getOwnPropValue from "./getOwnPropValue";

const getPrototypeOf = Object.getPrototypeOf;

/**
 * Returns the parent class constructor of a given constructor function or object.
 *
 * @param {Function|object} ctor The constructor function or object to get the parent class from.
 * @returns {Function|undefined|null} The parent class constructor or undefined/null if there is no parent class.
 */
export function getParentClass(ctor) {
  let result;

  if (typeof ctor === 'object' && ctor !== null) {
    ctor = getPrototypeOf(ctor);
    ctor = getOwnPropValue(ctor, 'Class') || ctor.constructor;
  }

  if (typeof ctor === 'function') {
    result = getOwnPropValue(ctor, 'super_');
    if (!result) {
      result = getPrototypeOf(ctor.prototype);
      if (result) {
        result = getOwnPropValue(result, 'Class') || result.constructor;
        if (result === Function || result === Object) result = null;
      }
    }
  }
  return result;
}

export default getParentClass
