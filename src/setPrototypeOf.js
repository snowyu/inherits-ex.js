// eslint-disable-next-line import/no-mutable-exports
let _setPrototypeOf = Object.setPrototypeOf;

if (!_setPrototypeOf) {
  _setPrototypeOf = function(obj, prototype) {
    // eslint-disable-next-line no-proto
    obj.__proto__ = prototype;
    return obj;
  };
}

export const setPrototypeOf = _setPrototypeOf;
export default _setPrototypeOf;
