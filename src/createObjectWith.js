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
    if (aClass !== vPrototype.constructor) {
      vPrototype.constructor.apply(result, aArguments);
    }
  }
  return result;
};
