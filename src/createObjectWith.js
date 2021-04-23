var hasNativeReflect = require('./isNativeReflectConstruct').hasNativeReflect

var defineProperty = Object.defineProperty;
var arraySlice = Array.prototype.slice;

module.exports = function(aClass, aArguments) {
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
