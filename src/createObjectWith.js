var hasNativeReflect = require('./isNativeReflectConstruct').hasNativeReflect

var defineProperty = Object.defineProperty;
var arraySlice = Array.prototype.slice;

/**
 * Creates a new object instance of the given class, passing the provided arguments to the class constructor.
 *
 * @param {function} aClass - The class to create an instance of.
 * @param {...*} [aArguments] - Arguments to pass to the class constructor.
 * @returns {object} A new instance of the class.
 */
function createObjectWith(aClass, aArguments) {
  var args = [aClass];
  if (aArguments)
    args = args.concat(arraySlice.call(aArguments));
  var result = new (Function.prototype.bind.apply(aClass, args));
  if (aClass !== Object && aClass !== Array && aClass !== RegExp) {
    var vPrototype = aClass.prototype;
    if (!vPrototype.hasOwnProperty('Class')) {
      defineProperty(vPrototype, 'Class', {
        value: aClass,
        configurable: true
      });
    }
    var vConstructor = vPrototype.constructor
    if (aClass !== vConstructor) {
      try {
        vConstructor.apply(result, aArguments);
      } catch(err) {
        if (err instanceof TypeError && err.toString().lastIndexOf("invoked without 'new'") !== -1) {
          // TODO(BUG): Can not pass the result instance to the ES6 constructor
          if (hasNativeReflect) {
            result = Reflect.construct(vConstructor, aArguments, aClass)
          } else {
            result = new vConstructor(...aArguments);
            setPrototypeOf(result, vPrototype);
          }
        }
        else throw err
      }
    }
  }
  return result;
};

module.exports = createObjectWith
