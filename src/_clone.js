const getOwnPropertyNames = Object.getOwnPropertyNames;

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
    if (value !== undefined) {dest[k] = value;}
  }
  return dest;
}

export default _clone;
