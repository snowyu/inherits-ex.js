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
    var vConstructor = vPrototype.constructor
    if (aClass !== vConstructor) {
      var args = arraySlice.call(arguments, 1);
      try {
        vConstructor.apply(result, args);
      } catch(err) {
        if (err instanceof TypeError && err.toString().lastIndexOf("invoked without 'new'") !== -1) {
          // TODO(BUG): Can not pass the result instance to the ES6 constructor
          result = new vConstructor(...args);
          // console.log('TCL:: ~ file: createObject.js ~ line 24 ~ vPrototype', vPrototype, result, args);
          setPrototypeOf(result, vPrototype);
        }
        else throw err
      }
    }
  }
  return result;
}

