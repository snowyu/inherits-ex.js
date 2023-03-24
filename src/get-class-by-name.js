const isArray = Array.isArray;

function getClass(aClassName, aScope, aValues) {
  if (typeof aScope === 'function') {
    return aScope(aClassName)
  } else if (isArray(aScope)) {
    if (!isArray(aValues)) {
      aValues = aScope;
      aScope = aValues.map((k) => {
        const result = k.name;
        if (result == null) {
          throw new TypeError(`No Scope Name for ${  k}`);
        }
        return result;
      });
    }
  } else if (typeof aScope === 'object') {
    const vKeys = Object.keys(aScope);
    aValues = vKeys.map((k) => {
      return aScope[k];
    });
    aScope = vKeys;
  } else {
    return
  };
  const ix = aScope.indexOf(aClassName);
  return aValues[ix];
  // return Function(aScope, 'return ' + aClassName).apply(null, aValues);
};

/**
 * Retrieve a class from the registered classes in the scope by its name.
 *
 * @param {string|Function} aClassName The class name or class. if it's class return it directly.
 * @param {Function|string[]|Function[]|{[name: string]: Function}=} aScope  The scope with all registered classes.
 *     it'll be called to find the class if the aScope is a `function(className):Function`
 * @param {Function[]=} aValues If `aScope` is an array of strings, then `aValues` must exist and can only be an array of corresponding classes.
 * @returns {Function|undefined} return the found class or undefined
 */
export function getClassByName(aClassName, aScope, aValues) {
  let result;
  if (aClassName != null) {
    if (typeof aClassName === 'function') {
      result = aClassName;
    } else if (typeof aClassName === 'string') {
      if (!/[, {}();.]+/.test(aClassName)) {
        result = getClass(aClassName, aScope, aValues);
      }
    }
  }
  return result;
};

export default getClassByName
