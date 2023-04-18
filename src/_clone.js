const getOwnPropertyNames = Object.getOwnPropertyNames;
const defineProperty      = Object.defineProperty;
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;


/**
 *
 * @callback CloneFilterFn
 * @param {string} name
 * @param {any} value
 * @returns {any} return value if include
 */

/**
 * Clone own properties from src to dest
 *
 * @param {object} dest
 * @param {object} src
 * @param {CloneFilterFn} filter
 * @returns {object} the dest object
 */
export function _clone(dest, src, filter) {
  const names = getOwnPropertyNames(src);

  for (let i = 0; i < names.length; i++ ) {
    const k = names[i];
    const value = filter(k, src[k]);
    if (value !== undefined) {
      const desc = getOwnPropertyDescriptor(src, k);
      defineProperty(dest, k, desc);
    }
  }
  return dest;
}

export default _clone;

export function cloneCtor(dest, src, filter) {
  const filterFn = function (name, value) {
    if (['length', 'name', 'arguments', 'caller', 'prototype', 'super_', '__super__'].includes(name)) {return}
    if (value !== undefined && filter) {value = filter(name, value)}
    return value;
  }
  _clone(dest, src, filterFn);
}

export function clonePrototype(dest, src, filter) {
  const filterFn = function (name, value) {
    if (['Class', 'constructor'].includes(name)) {return}
    if (value !== undefined && filter) {value = filter(name, value)}
    return value;
  }

  const sp = src.prototype;
  const dp = dest.prototype;
  _clone(dp, sp, filterFn);
}
