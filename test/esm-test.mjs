// @ts-check
import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

// =========================================================================
// ESM Import Tests — verifies .mjs files work with native Node.js ESM
// =========================================================================

// 1. Main entry import
import {
  inherits,
  inheritsDirectly,
  inheritsObject,
  isInheritedFrom,
  isMixinedFrom,
  getRootCtor,
  getSuperCtor,
  getSuper,
  getProtoChain,
  getParentClass,
  getConstructor,
  getClosestCommonAncestorCtor,
  isEmptyFunction,
  isEmptyCtor,
  mixin,
  mixins,
  extend,
  createObject,
  createObjectWith,
  replaceCtor,
  defineProperty,
  setPrototypeOf,
  getPrototypeOf,
  getClassByName,
  _clone,
  _extend,
  getCtorOfOwnProperty,
  getOwnPropValue,
  InheritsEx,
  isInheritedFromStr,
  isMixinedFromStr,
  isNativeReflectConstruct,
  createFunction,
  createCtor,
  hasNativeReflect,
} from '../lib/index.mjs';

// 2. Subpath imports (specific .mjs files)
import { getProtoChain as getProtoChain2 } from '../lib/getProtoChain.mjs';
import { isEmptyFunctionCli } from '../lib/isEmptyFunction-cli.mjs';
import { replaceCtor as replaceCtor2 } from '../lib/replaceCtor.mjs';
import { getClosestCommonAncestorCtor as getClosestCommonAncestorCtor2 } from '../lib/getClosestCommonAncestorCtor.mjs';
import { setPrototypeOf as setPrototypeOf2 } from '../lib/setPrototypeOf.mjs';

// =========================================================================

const EXPECTED_EXPORTS = [
  // [name, value, expectedType]
  ['inherits', inherits, 'function'],
  ['inheritsDirectly', inheritsDirectly, 'function'],
  ['inheritsObject', inheritsObject, 'function'],
  ['isInheritedFrom', isInheritedFrom, 'function'],
  ['isMixinedFrom', isMixinedFrom, 'function'],
  ['getRootCtor', getRootCtor, 'function'],
  ['getSuperCtor', getSuperCtor, 'function'],
  ['getSuper', getSuper, 'function'],
  ['getProtoChain', getProtoChain, 'function'],
  ['getParentClass', getParentClass, 'function'],
  ['getConstructor', getConstructor, 'function'],
  ['getClosestCommonAncestorCtor', getClosestCommonAncestorCtor, 'function'],
  ['isEmptyFunction', isEmptyFunction, 'function'],
  ['isEmptyCtor', isEmptyCtor, 'function'],
  ['mixin', mixin, 'function'],
  ['mixins', mixins, 'function'],
  ['extend', extend, 'function'],
  ['createObject', createObject, 'function'],
  ['createObjectWith', createObjectWith, 'function'],
  ['replaceCtor', replaceCtor, 'function'],
  ['defineProperty', defineProperty, 'function'],
  ['setPrototypeOf', setPrototypeOf, 'function'],
  ['getPrototypeOf', getPrototypeOf, 'function'],
  ['getClassByName', getClassByName, 'function'],
  ['_clone', _clone, 'function'],
  ['_extend', _extend, 'function'],
  ['getCtorOfOwnProperty', getCtorOfOwnProperty, 'function'],
  ['getOwnPropValue', getOwnPropValue, 'function'],
  ['InheritsEx', InheritsEx, 'function'],
  ['isInheritedFromStr', isInheritedFromStr, 'function'],
  ['isMixinedFromStr', isMixinedFromStr, 'function'],
  ['isNativeReflectConstruct', isNativeReflectConstruct, 'function'],
  ['createFunction', createFunction, 'function'],
  ['createCtor', createCtor, 'function'],
  ['hasNativeReflect', hasNativeReflect, 'boolean'],
];

// =========================================================================

describe('ESM - main entry (lib/index.mjs)', () => {
  for (const [name, value, expectedType] of EXPECTED_EXPORTS) {
    it(`should export ${name} as ${expectedType}`, () => {
      assert.strictEqual(typeof value, expectedType);
    });
  }
});

describe('ESM - subpath imports (lib/*.mjs)', () => {
  it('should import getProtoChain from lib/getProtoChain.mjs', () => {
    assert.strictEqual(typeof getProtoChain2, 'function');
    assert.strictEqual(getProtoChain2, getProtoChain);
  });

  it('should import isEmptyFunctionCli from lib/isEmptyFunction-cli.mjs', () => {
    assert.strictEqual(typeof isEmptyFunctionCli, 'function');
  });

  it('should import replaceCtor from lib/replaceCtor.mjs', () => {
    assert.strictEqual(typeof replaceCtor2, 'function');
    assert.strictEqual(replaceCtor2, replaceCtor);
  });

  it('should import getClosestCommonAncestorCtor from lib/getClosestCommonAncestorCtor.mjs', () => {
    assert.strictEqual(typeof getClosestCommonAncestorCtor2, 'function');
    assert.strictEqual(getClosestCommonAncestorCtor2, getClosestCommonAncestorCtor);
  });

  it('should import setPrototypeOf from lib/setPrototypeOf.mjs', () => {
    assert.strictEqual(typeof setPrototypeOf2, 'function');
    assert.strictEqual(setPrototypeOf2, setPrototypeOf);
  });
});

describe('ESM - inherits functionality', () => {
  it('should make a class inherit from another class', () => {
    class Animal {
      constructor(name) { this.name = name; }
      speak() { return `${this.name} makes a noise.`; }
    }

    function Cat(name) { this.name = name; }

    const result = inherits(Cat, Animal);
    assert.strictEqual(result, true);

    const cat = new Cat('Fluffy');
    assert.strictEqual(cat.speak(), 'Fluffy makes a noise.');
  });

  it('should support multi-inheritance with array', () => {
    class Root {}
    class A extends Root {}
    class B extends Root {}
    class MyClass {}

    inherits(MyClass, [A, B]);
    const chain = getProtoChain(MyClass);
    assert.deepStrictEqual(chain, ['Root', 'B', 'A', 'MyClass']);
  });

  it('should support inheritsDirectly', () => {
    function A() {}
    A.prototype.aMethod = () => 'a';

    function B() {}
    inheritsDirectly(B, A);
    assert.strictEqual(B.super_, A);
    assert.strictEqual(B.__super__, A.prototype);
  });

  it('should detect inheritance via isInheritedFrom', () => {
    class GrandParent {}
    class Parent extends GrandParent {}
    class Child extends Parent {}

    inherits(Parent, GrandParent);
    inherits(Child, Parent);

    assert.strictEqual(isInheritedFrom(Child, GrandParent), Parent);
    assert.strictEqual(isInheritedFrom(Child, Parent), Child);
    assert.strictEqual(isInheritedFrom(Child, Child), true);
  });

  it('should get root constructor correctly', () => {
    class Animal {}
    class Mammal extends Animal {}
    class Dog extends Mammal {}

    const root = getRootCtor(Dog);
    assert.strictEqual(root, Animal);
  });

  it('should get super constructor correctly', () => {
    class Parent {}
    class Child extends Parent {}
    inherits(Child, Parent);
    assert.strictEqual(getSuperCtor(Child), Parent);
  });

  it('should get parent class correctly', () => {
    class Parent {}
    class Child extends Parent {}
    inherits(Child, Parent);
    assert.strictEqual(getParentClass(Child), Parent);
  });

  it('should get prototype chain correctly', () => {
    class A {}
    class B extends A {}
    class C extends B {}

    inherits(B, A);
    inherits(C, B);

    assert.deepStrictEqual(getProtoChain(C), ['A', 'B', 'C']);
  });
});

describe('ESM - isEmptyFunction', () => {
  it('should detect empty arrow function', () => {
    assert.strictEqual(isEmptyFunction(() => {}), true);
  });

  it('should detect empty function expression', () => {
    assert.strictEqual(isEmptyFunction(function() {}), true);
  });

  it('should detect non-empty function', () => {
    assert.ok(!isEmptyFunction(function() { return 1; }));
  });

  it('should detect non-empty arrow function', () => {
    assert.ok(!isEmptyFunction(() => 42));
  });

  it('should detect empty ES6 class constructor', () => {
    assert.strictEqual(isEmptyCtor('class Foo {}'), true);
  });
});

describe('ESM - isEmptyFunctionCli (backward-compat alias)', () => {
  it('should detect empty function', () => {
    assert.strictEqual(isEmptyFunctionCli(function() {}), true);
  });

  it('should detect non-empty function', () => {
    assert.ok(!isEmptyFunctionCli(function() { return 1; }));
  });

  it('should be identical to isEmptyFunction', () => {
    assert.strictEqual(isEmptyFunctionCli, isEmptyFunction);
  });
});

describe('ESM - defineProperty', () => {
  it('should define a non-enumerable property by default', () => {
    const obj = {};
    defineProperty(obj, 'secret', 42);
    assert.strictEqual(obj.secret, 42);
    assert.strictEqual(obj.propertyIsEnumerable('secret'), false);
  });

  it('should define an enumerable property when requested', () => {
    const obj = {};
    defineProperty(obj, 'visible', 'hello', { enumerable: true });
    assert.strictEqual(obj.visible, 'hello');
    assert.strictEqual(obj.propertyIsEnumerable('visible'), true);
  });
});

describe('ESM - mixin', () => {
  it('should mixin methods from one class to another', () => {
    const callOrder = [];

    class MixinSrc {
      mx() { callOrder.push('Mixin'); }
    }

    class Target {
      m() { callOrder.push('Target'); }
    }

    const result = mixin(Target, MixinSrc);
    assert.strictEqual(result, true);

    const instance = new Target();
    instance.mx();
    assert.deepStrictEqual(callOrder, ['Mixin']);
  });

  it('should detect mixin via isMixinedFrom', () => {
    class MixinClass {}
    class Target {}
    mixin(Target, MixinClass);

    assert.strictEqual(isMixinedFrom(Target, MixinClass), true);
  });
});

describe('ESM - createObject', () => {
  it('should create instance with ES6 class', () => {
    class A {}
    const instance = createObject(A);
    assert.ok(instance instanceof A);
  });

  it('should create instance with correct "Class" property', () => {
    class A {}
    const instance = createObject(A);
    assert.strictEqual(instance.Class, A);
  });
});

describe('ESM - getSuper', () => {
  it('should access parent class methods via getSuper', () => {
    class A {
      m() { return 'A'; }
    }
    class B extends A {
      m() { return getSuper(this).m() + 'B'; }
    }
    inherits(B, A);

    const b = new B();
    assert.strictEqual(b.m(), 'AB');
  });
});

describe('ESM - getCtorOfOwnProperty', () => {
  it('should find the constructor owning a property', () => {
    class A { aMethod() {} }
    class B extends A { bMethod() {} }

    inherits(B, A);
    assert.strictEqual(getCtorOfOwnProperty(B, 'aMethod'), A);
    assert.strictEqual(getCtorOfOwnProperty(B, 'bMethod'), B);
  });
});

describe('ESM - _extend', () => {
  it('should extend target with source properties', () => {
    const target = { a: 1 };
    const source = { b: 2, c: 3 };
    _extend(target, source);
    assert.deepStrictEqual(target, { a: 1, b: 2, c: 3 });
  });
});

describe('ESM - getOwnPropValue', () => {
  it('should get own property value', () => {
    const obj = { a: 1 };
    assert.strictEqual(getOwnPropValue(obj, 'a'), 1);
    assert.strictEqual(getOwnPropValue(obj, 'b'), undefined);
  });
});

describe('ESM - extend', () => {
  it('should extend prototype with super constructor prototypes', () => {
    class A { a() { return 'a'; } }
    class B { b() { return 'b'; } }
    class C {}

    extend(C, A, B);
    assert.strictEqual(C.prototype.a, A.prototype.a);
    assert.strictEqual(C.prototype.b, B.prototype.b);
  });
});

describe('ESM - replaceCtor', () => {
  it('should replace object constructor prototype', () => {
    class OldClass { oldMethod() {} }
    class NewClass { newMethod() {} }

    const obj = new OldClass();
    const result = replaceCtor(obj, NewClass);
    assert.strictEqual(result, true);
  });
});

describe('ESM - getClassByName', () => {
  it('should return class directly if function is passed', () => {
    function MyClass() {}
    assert.strictEqual(getClassByName(MyClass), MyClass);
  });

  it('should find class by name from scope object', () => {
    const scope = { Foo: class Foo {} };
    const found = getClassByName('Foo', scope);
    assert.strictEqual(found, scope.Foo);
  });
});

describe('ESM - InheritsEx', () => {
  it('should create inherits function with scope', () => {
    class Root {}
    class Parent {}
    InheritsEx.setScope([Root, Parent]);

    class MyClass {}
    const inheritsEx = InheritsEx();
    const result = inheritsEx(MyClass, ['Parent', 'Root']);
    assert.strictEqual(result, true);
    assert.strictEqual(isInheritedFrom(MyClass, Parent), MyClass);
    assert.strictEqual(isInheritedFrom(MyClass, Root), Parent);
  });
});
