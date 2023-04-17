import getSuperCtor from './getSuperCtor.js';
import { isEmptyFunction } from './isEmptyFunction.js'

// get latest non-empty constructor function through inherits chain

/**
 * Returns the first(latest) non-empty constructor in the inheritance chain of the given constructor that has own properties.
 *
 * @param {function} ctor - The constructor to get the first non-empty constructor of.
 * @returns {function} The first(latest) non-empty constructor in the inheritance chain of the given constructor.
 */
export function getConstructor(ctor) {
  let result = ctor;
  let isEmpty = isEmptyFunction(result);
  let v  = getSuperCtor(result);
  while (isEmpty && v && v !== Object) {
    result  = v;
    v  = getSuperCtor(result);
    isEmpty = isEmptyFunction(result);
  }
  return result;
}

export default getConstructor
