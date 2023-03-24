import {newPrototype} from './newPrototype';
import {defineProperty} from './defineProperty';

const setPrototypeOf = Object.setPrototypeOf;

// just replace the ctor.super to superCtor,
/**
 * Enables dynamic prototypal inheritance between classes, allowing for flexible and reusable code.
 *
 * The `inheritsDirectly` function is compatible with both ES5 and ES6, as well as older browsers that do not support these versions of JavaScript.
 * The function also supports CoffeeScript-generated classes
 *
 * **Note**: If a parent class already exists on the class, it will be replaced by the new parent class.
 *
 * @param {Function} ctor  The child class that will inherit from the parent class.
 * @param {Function} superCtor The parent class from which the child class will inherit.
 * @param {boolean=} staticInherit Optional A boolean flag indicating whether the child class should also inherit static properties and methods from the parent class. The default value is `true`.
 */
export function inheritsDirectly(ctor, superCtor, staticInherit) {
  defineProperty(ctor, 'super_', superCtor);
  defineProperty(ctor, '__super__', superCtor.prototype);// for coffeeScript super keyword.
  const vPrototype = newPrototype(superCtor, ctor);
  ctor.prototype = vPrototype; // ES6 class can not modify prototype!
  if (vPrototype !== ctor.prototype) {
    defineProperty(ctor.prototype, 'constructor', vPrototype.constructor)
    defineProperty(ctor.prototype, 'Class', ctor)
  }
  // console.log('TCL:: ~ file: inheritsDirectly.js ~ line 11 ~ ctor.prototype', ctor.prototype, ctor.prototype.constructor, ctor.prototype.Class);
  setPrototypeOf(ctor.prototype, superCtor.prototype);
  if (staticInherit !== false) {
    // NOTE: ES6 use this to keep superCtor.
    setPrototypeOf(ctor, superCtor); // additional static member inheritance
  }
};

export default inheritsDirectly
