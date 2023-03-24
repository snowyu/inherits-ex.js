/**
 * Check if a constructor is mixed from a specific constructor.
 * @param {function} ctor - The constructor to check.
 * @param {string} superStr - The name of constructor to check if the `ctor` is mixed from.
 * @returns {boolean} - True if `ctor` is mixed from `superCtor`, otherwise false.
 */
export function isMixinedFromStr(ctor, superStr) {
  let result = false;
  const mixinCtors = ctor.mixinCtors_;
  if (mixinCtors) {
    for (let i = 0; i < mixinCtors.length; i++) {
      result = mixinCtors[i].name === superStr;
      if (result) {break;}
    }
  }

  return result;
}

export default isMixinedFromStr;
