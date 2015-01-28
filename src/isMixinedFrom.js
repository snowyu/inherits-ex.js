var isMixinedFromStr = require('./isMixinedFromStr');

module.exports = function(ctor, superCtor) {
  if ('string' === typeof superCtor) return isMixinedFromStr(ctor, superCtor);
  var mixinCtors = ctor.mixinCtors_;
  var result = false;
  if (mixinCtors) {
    result = mixinCtors.indexOf(superCtor);
    result = result >= 0;
  }
  return result;
}

