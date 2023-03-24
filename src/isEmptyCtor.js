/**
 * Determines whether the given string represents an empty constructor.
 *
 * @param {string} vStr - The string to check.
 * @returns {boolean} - Returns true if the string represents an empty constructor, otherwise false
 */
export function isEmptyCtor(vStr) {
  const isClass = /^class\s+/.test(vStr);
  let result
  if (isClass) {
    result = /^class\s+\S+\s*{\s*}/g.test(vStr);
    if (!result) {
      result = !/^class\s+\S+\s*{[\s\S]*(\S+\s*[\n;]\s*)?constructor\s*\((.|[\n\r\u2028\u2029])*\)\s*{[\s\S]*}[\s\S]*}/.test(vStr);
    }
  }
  return result;
};

export default isEmptyCtor
