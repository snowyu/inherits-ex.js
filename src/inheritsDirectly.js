var newPrototype = require('./newPrototype');
var setPrototypeOf = require('./setPrototypeOf');
var defineProperty = require('./defineProperty');

//just replace the ctor.super to superCtor,
module.exports = function(ctor, superCtor, staticInherit) {
  defineProperty(ctor, 'super_', superCtor);
  defineProperty(ctor, '__super__', superCtor.prototype);//for coffeeScript super keyword.
  // console.log('TCL:: ~ file: inheritsDirectly.js ~ line 9 ~ ctor', ctor);
  ctor.prototype = newPrototype(superCtor, ctor);
  setPrototypeOf(ctor.prototype, superCtor.prototype);
  if (staticInherit !== false) {
    // NOTE: ES6 use this to keep superCtor.
    setPrototypeOf(ctor, superCtor);//additional static inheritance
  }
};
