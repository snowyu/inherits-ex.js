/**
 * Determines whether the given function is empty.
 *
 * @param {Function} aFunc - The function to check.
 * @returns {boolean} - Returns true if it's empty, otherwise false
 */
export function isEmptyFunctionCli(aFunc) {
  aFunc = aFunc.toString()
  return /^(function\s+)?\S*\s*\((.|[\n\r\u2028\u2029])*\)\s*{[\s;\n\r]*}$/g.test(aFunc) ||
    /^\((.|[\n\r\u2028\u2029])*\)\s*=>\s*{[\s;]*}$/g.test(aFunc);
};

export default isEmptyFunctionCli;
