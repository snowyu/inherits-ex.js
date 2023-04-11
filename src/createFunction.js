// Write by http://stackoverflow.com/users/1048572/bergi
/*
 * Usage:
 *   var fn = createFunction('yourFuncName', ['arg1', 'arg2'], 'return log(arg1+arg2);', {log:console.log});
 *
 * fn.toString() is :
 * "function yourFuncName(arg1, arg2) {
 *    return log(arg1+arg2);
 *  }"
 * here use a tricky to apply the scope:
 * Function(aArguments, aBody)
 * Function(scopeNames, aFunctionCloureBody).apply(null, scopeValues)
 */
const isArray = Array.isArray;
function isString(v){return typeof v === 'string';};
function isObject(v){return v && typeof v === 'object';};

/**
 * Creates a new function with the given name, arguments, body, scope, and values.
 *
 * @param {string} name - The name of the function.
 * @param {string|string[]} aArgs - The argument names of the function if it's `string[]`, else it's the function body without arguments.
 * @param {string} body - The body of the function.
 * @param {string[]|Object} [scope] - The scope of the function.
 * @param {any[]} [values] - The values of the `scope` if the `scope` is `string[]``.
 * @returns {Function} - The created function.
 *
 * @example
 *   var fn = createFunction('yourFuncName', ['arg1', 'arg2'], 'return log(arg1+arg2);', {log:console.log.bind(console)});
 *
 */
export function createFunction(name, aArgs, body, scope, values) {
  if (arguments.length === 1) {
    // eslint-disable-next-line no-new-func
    return Function(`function ${  name  }(){}\nreturn ${  name  };`)();
  }
  if (isString(aArgs)) {
    values = scope;
    scope = body;
    body = aArgs;
    aArgs = [];
  } else if (aArgs == null) {
    aArgs = [];
  }
  if (!isArray(scope) || !isArray(values)) {
    if (isObject(scope)) {
      const keys = Object.keys(scope);
      values = keys.map((k) => { return scope[k]; });
      scope = keys;
    } else {
      values = [];
      scope = [];
    }
  }
  if (typeof body !== 'string') {
    body = ''
  }

  // eslint-disable-next-line no-new-func
  return Function(scope,
    `function ${  name  }(${  aArgs.join(', ')  }) {\n${  body  }\n}\nreturn ${  name  };`).apply(null, values);
};

export default createFunction
