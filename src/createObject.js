var setPrototypeOf    = require('./setPrototypeOf');

var arraySlice = Array.prototype.slice;
var defineProperty = Object.defineProperty;

module.exports = function(aClass) {
  var result = new (Function.prototype.bind.apply(aClass, arguments));
  if (aClass !== Object && aClass !== Array && aClass !== RegExp) {
    if (!aClass.prototype.hasOwnProperty('Class')) {
      defineProperty(aClass.prototype, 'Class', {
        value: aClass,
        configurable: true
      });
    }
    if (aClass !== aClass.prototype.constructor) {
      aClass.prototype.constructor.apply(result, arraySlice.call(arguments, 1));
      // try {
      //   aClass.prototype.constructor.apply(result, arraySlice.call(arguments, 1));
      // } catch(err) {
      //   if (err instanceof TypeError && err.toString().lastIndexOf("invoked without 'new'") !== -1) {
      //     result = new aClass.prototype.constructor(...arraySlice.call(arguments, 1));
      //     setPrototypeOf(result, aClass.prototype);
      //   }
      //   else throw err
      // }
    }
  }
  return result;
}

