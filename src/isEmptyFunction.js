import isEmptyCtor from './isEmptyCtor.js';

/**
 * Checks whether a given function is empty or not.
 * @param {Function} aFunc - The function to be checked.
 * @returns {boolean} - True if the function is empty, false otherwise.
 *
 * @example
 * isEmptyFunction(Array.prototype.push); // -> false
 * isEmptyFunction(()=>{}); // -> true
*/
export function isEmptyFunction(aFunc) {
  const vStr = aFunc.toString();
  let result = /^(function\s+)?\S*\s*\((.|[\n\r\u2028\u2029])*\)\s*{[\s;\n\r]*}$/g.test(vStr);
  if (!result) { result = /^\((.|[\n\r\u2028\u2029])*\)\s*=>\s*{[\s;]*}$/g.test(vStr)}
  if (!result) {result = isEmptyCtor(vStr)}

  // if (!result) {
  //   if (!istanbul)
  //     try {istanbul = eval("require('istanbul')");} catch(e){}
  //   if (istanbul)
  //     result = /^function\s*\S*\s*\((.|[\n\r\u2028\u2029])*\)\s*{__cov_[\d\w_]+\.f\[.*\]\+\+;}$/.test(vStr);
  // }
  return result;
};

export default isEmptyFunction;
