module.exports = function(vStr) {
  var isClass = /^class\s+/.test(vStr);
  var result
  if (isClass) {
    result = /^class\s+\S+\s*{\s*}/g.test(vStr);
    if (!result) {
      result = !/^class\s+\S+\s*{[\s\S]*(\S+\s*[\n;]\s*)?constructor\s*\((.|[\n\r\u2028\u2029])*\)\s*{[\s\S]*}[\s\S]*}/.test(vStr);
    }
  }
  return result;
};
