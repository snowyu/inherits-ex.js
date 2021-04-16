module.exports = function(aFunc, istanbul) {
  var vStr = aFunc.toString();
  var result = /^function\s*\S*\s*\((.|[\n\r\u2028\u2029])*\)\s*{[\s;]*}$/g.test(vStr);
  if (!result) {
    result = /^class\s+\S+\s*{\s*}/g.test(vStr);
  }
  if (!result) {
    result = /^class\s+\S+\s*{\s*(\S+\s*\n\s*)?constructor\s*\(.*\)\s*{\s*}}/g.test(vStr);
  }
  if (!result) {
    if (!istanbul) try {istanbul = eval("require('istanbul')");} catch(e){}
    if (istanbul)
      result = /^function\s*\S*\s*\((.|[\n\r\u2028\u2029])*\)\s*{__cov_[\d\w_]+\.f\[.*\]\+\+;}$/.test(vStr);
  }
  return result;
};
