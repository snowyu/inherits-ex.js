import {inherits} from './inherits.js';

const getPrototypeOf = Object.getPrototypeOf;
const setPrototypeOf = Object.setPrototypeOf;

/**
 * Sets the prototype of an object to a new prototype, and inherits from a given class.
 *
 * make sure the aClass.prototype hook to the aObject instance.
 *
 * @param {Object} aObject - The object whose prototype needs to be set.
 * @param {Function} aClass - The class to inherit from.
 * @param {boolean} [staticInherit=true] - Whether to inherit static properties or not. defaults to true
 * @returns {boolean} - Whether the prototype was successfully set or not.
 * @example
 * ```js
 * class Person {
 *   constructor(name) {
 *     this.name = name;
 *   }
 *
 *   sayHello() {
 *     console.log(`Hello, my name is ${this.name}`);
 *   }
 * }
 *
 * const john = new Person('John');
 * const jane = {name: 'Jane'};
 *
 * // make object Inherit from Person
 * inheritsObject(jane, Person);
 *
 * // Now jane's prototype is Person, and she can call sayHello
 * jane.sayHello(); // logs "Hello, my name is Jane"
 * ```
 */
export function inheritsObject(aObject, aClass, staticInherit) {
  const vOldProto = getPrototypeOf(aObject);
  let result = false;
  if ( vOldProto !== aClass.prototype) {
    inherits(aClass, vOldProto.constructor, staticInherit);
    setPrototypeOf(aObject, aClass.prototype);
    result = true;
  }
  return result;
};

export default inheritsObject
