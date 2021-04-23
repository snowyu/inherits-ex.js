var setPrototypeOf    = require('./setPrototypeOf');

var arraySlice = Array.prototype.slice;
var defineProperty = Object.defineProperty;

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;

  // core-js@3
  if (Reflect.construct.sham) return false;

  // Proxy can't be polyfilled. Every browser implemented
  // proxies before or at the same time as Reflect.construct,
  // so if they support Proxy they also support Reflect.construct.
  if (typeof Proxy === "function") return true;

  // Since Reflect.construct can't be properly polyfilled, some
  // implementations (e.g. core-js@2) don't set the correct internal slots.
  // Those polyfills don't allow us to subclass built-ins, so we need to
  // use our fallback implementation.
  try {
    // If the internal slots aren't set, this throws an error similar to
    //   TypeError: this is not a Date object.
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

var hasNativeReflect = isNativeReflectConstruct()

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
          if (hasNativeReflect) {
            result = Reflect.construct(vConstructor, args, aClass)
          } else {
            result = new vConstructor(...args);
            // console.log('TCL:: ~ file: createObject.js ~ line 24 ~ vPrototype', vPrototype, result, args);
            setPrototypeOf(result, vPrototype);
          }
        }
        else throw err
      }
    }
  }
  return result;
}

