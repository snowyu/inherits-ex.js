// lib/isEmptyCtor.mjs
function isEmptyCtor(vStr) {
  const isClass = /^class\s+/.test(vStr);
  let result;
  if (isClass) {
    result = /^class\s+\S+\s*{\s*}/g.test(vStr);
    if (!result) {
      result = !/^class\s+\S+\s*{[\s\S]*(\S+\s*[\n;]\s*)?constructor\s*\((.|[\n\r\u2028\u2029])*\)\s*{[\s\S]*}[\s\S]*}/.test(vStr);
    }
  }
  return result;
}
var isEmptyCtor_default = isEmptyCtor;

// lib/isEmptyFunction.mjs
function isEmptyFunction(aFunc) {
  const vStr = aFunc.toString();
  let result = /^(function\s+)?\S*\s*\((.|[\n\r\u2028\u2029])*\)\s*{[\s;\n\r]*}$/g.test(vStr);
  if (!result) {
    result = /^\((.|[\n\r\u2028\u2029])*\)\s*=>\s*{[\s;]*}$/g.test(vStr);
  }
  if (!result) {
    result = isEmptyCtor_default(vStr);
  }
  return result;
}

// tmp/test-import.mjs
console.log(isEmptyFunction);
