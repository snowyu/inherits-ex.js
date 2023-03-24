import { isEmptyFunction } from './isEmptyFunction'

const getPrototypeOf  = Object.getPrototypeOf
const objectSuperCtor = getPrototypeOf(Object);

// get latest non-empty constructor function through inherits link

/**
 * Returns the first(latest) non-empty constructor in the inheritance chain of the given constructor that has own properties.
 *
 * @param {function} ctor - The constructor to get the first non-empty constructor of.
 * @returns {function} The first(latest) non-empty constructor in the inheritance chain of the given constructor.
 */
export function getConstructor(ctor) {
  let result = ctor;
  let isEmpty = isEmptyFunction(result);
  let v  = result.super_ || getPrototypeOf(result);
  while (isEmpty && v && v !== objectSuperCtor) {
    result  = v;
    v  = result.super_ || getPrototypeOf(result);
    isEmpty = isEmptyFunction(result);
  }
  return result;
}

export default getConstructor
