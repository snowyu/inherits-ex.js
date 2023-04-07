import getOwnPropValue from "./getOwnPropValue.js";

const getPrototypeOf      = Object.getPrototypeOf;

/**
 * Return the Super Constructor of the ctor
 * @param {Function} ctor
 * @returns {Function}
 */
export function getSuperCtor(ctor) {
  let ctorSuper = getOwnPropValue(ctor, 'super_');
  if (!ctorSuper) {
    const ctorProto = ctor.prototype && getPrototypeOf(ctor.prototype);
    ctorSuper = ctorProto && (getOwnPropValue(ctorProto, 'Class') || ctorProto.constructor);
  }
  return ctorSuper;
}

export default getSuperCtor;
