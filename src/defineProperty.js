var _defineProperty = Object.defineProperty;

if (!_defineProperty) {
  _defineProperty = function(obj, key, descriptor) {
    var value;
    if (descriptor) {
      value = descriptor.value;
    }
    obj[key] = value;
    return obj;
  };
}

/**
 * Define the object's property and value. The property is not enumerable
 * by default.
 *
 * @param {object} object The object to define the property on.
 * @param {string} key the property name.
 * @param {*} value the property value.
 * @param {*} aOptions the property descriptor.
 * @param {boolean} [aOptions.enumerable=false] - Whether the property is enumerable.
 * @param {boolean} [aOptions.configurable=true] - Whether the property is configurable.
 * @param {boolean} [aOptions.writable=true] - Whether the property is writable.
 * @param {function} [aOptions.get] - The getter function.
 * @param {function} [aOptions.set] - The setter function.
 * @returns The object that was passed to the function, with the specified property added or modified.
 */
module.exports = function defineProperty(object, key, value, aOptions) {
  var descriptor, isAccessor, writable;
  writable = true;
  descriptor = {
    configurable: true,
    enumerable: false
  };
  if (aOptions) {
    descriptor.enumerable = aOptions.enumerable === true;
    descriptor.configurable = aOptions.configurable !== false;
    if (aOptions.get) {
      isAccessor = true;
      descriptor.get = aOptions.get;
    }
    if (aOptions.set) {
      isAccessor = true;
      descriptor.set = aOptions.set;
    }
    writable = aOptions.writable !== false;
    if (value === undefined) {
      value = aOptions.value;
    }
  }
  if (!isAccessor) {
    descriptor.writable = writable;
    descriptor.value = value;
  }
  return _defineProperty(object, key, descriptor);
};
