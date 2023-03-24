// eslint-disable-next-line import/no-mutable-exports
export let getPrototypeOf = Object.getPrototypeOf;

if (!getPrototypeOf) {
  getPrototypeOf = function(obj) {
    // eslint-disable-next-line no-proto
    return obj.__proto__;
  };
}


export default getPrototypeOf;
