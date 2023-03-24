import {getConstructor} from './getConstructor';
import {isEmptyFunction} from './isEmptyFunction';
import {_extend} from './_extend';

/**
 *  Creates a new object with a prototype chain from a given class and constructor function.
 *  @param {Function} aClass - The class to use as prototype chain.
 *  @param {Function} [aConstructor] - The constructor function for the new object.
 *  @returns {Object} - The newly created prototype object.
 */
export function newPrototype(aClass, aConstructor) {
  // Object.create(prototype) only for ES5
  // Object.create(prototype, initProps) only for ES6
  // For Browser not support ES5/6:
  //  var Object = function() { this.constructor = aConstructor; };
  //  Object.prototype = aClass.prototype;
  //  return new Object();
  const ctor = isEmptyFunction(aConstructor) ? getConstructor(aClass) : aConstructor;
  // console.log('TCL:: ~ file: newPrototype.js ~ line 13 ~ ctor', aClass, ctor);
  let result;
  if (Object.create) { // typeof Object.create === 'function'
    result = Object.create(aClass.prototype, {
      Class: {
        value: aConstructor,
        enumerable: false,
        writable: true,
        configurable: true
      },
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  } else {
    const Obj = function obj() {
      this.constructor = ctor;
      this.Class = aConstructor;
    };
    Obj.prototype = aClass.prototype;
    result = new Obj();
  }
  _extend(result, aConstructor.prototype);
  return result;
};

export default newPrototype;
