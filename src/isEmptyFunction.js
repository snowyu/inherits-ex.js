module.exports = function(aFunc, istanbul) {
  var vStr = aFunc.toString();
  var result = /^function\s*\S*\s*\(.*\)\s*{[\s;]*}$/.test(vStr);
  if (!result) {
    if (!istanbul) try {istanbul = require('istanbul');} catch(e){};
    if (istanbul)
      result = /^function\s*\S*\s*\(.*\)\s*{__cov_[\d\w_]+\.f\[.*\]\+\+;}$/.test(vStr);
  }
  return result;
}
