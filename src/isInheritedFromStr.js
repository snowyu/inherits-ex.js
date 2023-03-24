const getPrototypeOf     = Object.getPrototypeOf;

/**
 *   Determines if a constructor(class) is inherited from a given the name of super constructor(class).
 *   @param {Function} ctor - The constructor function to check.
 *   @param {string} superStr - The super constructor's name to check for inheritance.
 *   @param {boolean=false} throwError - If true, an error will be thrown if a circular inheritance is found.
 *   @returns {boolean|Function} - If the constructor is inherited from the super constructor, returns the constructor.
 *   Otherwise, returns false.
 */
export function isInheritedFromStr(ctor, superStr, throwError) {
  if (ctor.name === superStr) {
    if (throwError)
      throw new Error('Circular inherits found!');
    else
      return true;
  }
  let ctorSuper = (ctor.hasOwnProperty('super_') && ctor.super_) || getPrototypeOf(ctor);
  let result  =  ctorSuper != null && ctorSuper.name === superStr;
  const checkeds = [];
  checkeds.push(ctor);
  while (!result && ((ctor = ctorSuper) != null)) {
    ctorSuper = (ctor.hasOwnProperty('super_') && ctor.super_) || getPrototypeOf(ctor);
    if (checkeds.includes(ctor)) {
      if (throwError)
        throw new Error('Circular inherits found!');
      else
        return true;
    }
    checkeds.push(ctor);
    result = ctorSuper != null && ctorSuper.name === superStr;
  }
  if (result) {
    result = ctor;
    ctor = checkeds[0];
    if (ctor.mixinCtor_ === result)
result = ctor;
  }

  return result;
};

export default isInheritedFromStr;
