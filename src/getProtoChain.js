const getPrototypeOf  = Object.getPrototypeOf;
const objectSuperCtor = getPrototypeOf(Object);

/**
 * Returns an array of the names of constructors in the prototype chain of the given constructor.
 *
 * **Note**: the `getProtoChain.maxDepth` for `mixinCtors` is 10, You can change it.
 *
 * @param {function} ctor - The constructor to get the prototype chain of.
 * @throws {Error} If the maximum depth of nesting is reached.
 * @returns {string[]} An array of the names of constructors in the prototype chain of the given constructor.
 *   The last element is always the string "Base," which represents the `Object` class that serves as the base for all
 *   prototype chains.
 *
 * @example
 *
 * // Define a class hierarchy
 * class Animal {}
 * class Mammal extends Animal {}
 * class Cat extends Mammal {}
 *
 * // Get the prototype chain of the Cat class
 * const protoChain = getProtoChain(Cat);
 * console.log(protoChain); // Output: ["Cat", "Mammal", "Animal", "Base"]
 */
export function getProtoChain(ctor, depth) {
  if (depth == null) {
    depth = 0;
  }
  if (depth >= getProtoChain.maxDepth) {
    throw new Error('The maximum depth of nesting is reached.');
  }
  const result = []
  let lastCtor;
  while (ctor && ctor !== objectSuperCtor) {
    let mCtors, name;
    if (lastCtor && (mCtors = lastCtor.mixinCtors_)) {
      mCtors = mCtors.map((m) => {
        return getProtoChain(m, ++depth);
      });
      name = mCtors;
    } else {
      name = ctor === Object ? "Base" : ctor.name;
    }
    lastCtor = ctor;
    ctor = (ctor.hasOwnProperty('super_') && ctor.super_) || getPrototypeOf(ctor);
    result.push(name);
  }

  return result.reverse();
};

getProtoChain.maxDepth = 10;

export default getProtoChain

