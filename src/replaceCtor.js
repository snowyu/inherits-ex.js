var getPrototypeOf = Object.getPrototypeOf;
if (!getPrototypeOf) {
  getPrototypeOf = function(obj) {
    return obj.__proto__;
  };
}

var setPrototypeOf = Object.setPrototypeOf;
if (!setPrototypeOf) {
  setPrototypeOf = function(obj, prototype) {
    obj.__proto__ = prototype;
  };
}
var defineProperty = Object.defineProperty;

//just replace the object's constructor
module.exports = function(aObject, aClass) {
  var vOldProto = getPrototypeOf(aObject);
  var result = false;
  if ( vOldProto && vOldProto !== aClass.prototype) {
    if (!aClass.prototype.hasOwnProperty('Class')) {
      defineProperty(aClass.prototype, 'Class', {
        value: aClass,
        configurable: true
      });
    }
    setPrototypeOf(aObject, aClass.prototype);
    result = true;
  }
  return result;
}

