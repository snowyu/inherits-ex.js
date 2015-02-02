//Write by http://stackoverflow.com/users/1048572/bergi
/*
 * Usage:
 *   var fn = createFunction('yourFuncName', ['arg1', 'arg2'], 'return log(arg1+arg2);', {log:console.log});
 *
 * fn.toString() is :
 * "function yourFuncName(arg1, arg2) {
 *    return log(arg1+arg2);
 *  }"
 */
var isArray = Array.isArray;

module.exports = function(name, args, body, scope, values) {
  if (arguments.length === 1) return Function("function "+name+"(){}\nreturn "+name+";")();
  if (typeof args == "string")
      values = scope, scope = body, body = args, args = [];
  if (!isArray(scope) || !isArray(values)) {
      if (typeof scope == "object") {
          var keys = Object.keys(scope);
          values = keys.map(function(k) { return scope[k]; });
          scope = keys;
      } else {
          values = [];
          scope = [];
      }
  }
  return Function(scope, "function "+name+"("+args.join(", ")+") {\n"+body+"\n}\nreturn "+name+";").apply(null, values);
}

