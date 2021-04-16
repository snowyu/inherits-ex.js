var setPrototypeOf    = require('./setPrototypeOf');

var arraySlice = Array.prototype.slice;
var defineProperty = Object.defineProperty;

module.exports = function(aClass) {
  var result = new (Function.prototype.bind.apply(aClass, arguments));
  if (aClass !== Object && aClass !== Array && aClass !== RegExp) {
    var vPrototype = aClass.prototype;
    if (!vPrototype.hasOwnProperty('Class')) {
      defineProperty(vPrototype, 'Class', {
        value: aClass,
        configurable: true
      });
    }
    if (aClass !== vPrototype.constructor) {
      var args = arraySlice.call(arguments, 1);
      try {
        vPrototype.constructor.apply(result, args);
      } catch(err) {
        if (err instanceof TypeError && err.toString().lastIndexOf("invoked without 'new'") !== -1) {
          result = new vPrototype.constructor(...args);
          // console.log('TCL:: ~ file: createObject.js ~ line 24 ~ vPrototype', vPrototype, result, args);
          setPrototypeOf(result, vPrototype);
        }
        else throw err
      }
    }
  }
  return result;
}

