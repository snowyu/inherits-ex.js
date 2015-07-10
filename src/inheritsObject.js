var inherits = require('./inherits');

//make sure the aClass.prototype hook to the aObject instance.

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

module.exports = function(aObject, aClass) {
  // ES6: Object.getPrototypeOf / Object.setPrototypeOf
  var vOldProto = getPrototypeOf(aObject);
  var result = false;
  if ( vOldProto !== aClass.prototype) {
    inherits(aClass, vOldProto.constructor);
    setPrototypeOf(aObject, aClass.prototype);
    result = true;
  }
  return result;
};
