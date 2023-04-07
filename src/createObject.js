import {hasNativeReflect} from './isNativeReflectConstruct.js'

const defineProperty  = Object.defineProperty
const setPrototypeOf  = Object.setPrototypeOf;
const arraySlice      = Array.prototype.slice;

/**
 * Creates a new instance of the given class using the specified arguments.
 * @param {Function} aClass - The class to instantiate.
 * @param {...*} args - The arguments to pass to the constructor of the class.
 * @returns {*} - A new instance of the class.
 * @example
 * // Define a class
 * class Person {
 *   constructor(name, age) {
 *    this.name = name;
 *    this.age = age;
 *   }
 * }
 * // Create a new instance of the Person class
 * const john = createObject(Person, 'John', 30);
 * console.log(john); // Output: Person { name: 'John', age: 30 }
 */
export function createObject(aClass) {
  let result = new (Function.prototype.bind.apply(aClass, arguments));
  if (aClass !== Object && aClass !== Array && aClass !== RegExp) {
    const vPrototype = aClass.prototype;
    if (!vPrototype.hasOwnProperty('Class')) {
      defineProperty(vPrototype, 'Class', {
        value: aClass,
        configurable: true
      });
    }
    const vConstructor = vPrototype.constructor
    if (aClass !== vConstructor) {
      const args = arraySlice.call(arguments, 1);
      try {
        vConstructor.apply(result, args);
      } catch(err) {
        if (err instanceof TypeError && err.toString().lastIndexOf("invoked without 'new'") !== -1) {
          // TODO(BUG): Can not pass the result instance to the ES6 constructor
          if (hasNativeReflect) {
            result = Reflect.construct(vConstructor, args, aClass)
          } else {
            // eslint-disable-next-line new-cap
            result = new vConstructor(...args);
            setPrototypeOf(result, vPrototype);
          }
        }
        else throw err
      }
    }
  }
  return result;
}

export default createObject
