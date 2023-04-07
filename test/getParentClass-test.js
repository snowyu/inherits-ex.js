import { expect } from 'chai';
import sinon from 'sinon';

import getParentClass from '../src/getParentClass'

describe('getParentClass', () => {
  class ParentClass {}
  class ChildClass extends ParentClass {}

  it('should return undefined if there is no parent class', () => {
    const result = getParentClass(Object);
    expect(result).to.be.null;
  });

  it('should return the parent class constructor if it exists', () => {
    const result = getParentClass(ChildClass);
    expect(result).to.equal(ParentClass);
  });

  it('should get the parent class constructor from the internal __proto__ property of an object', () => {
    const obj = new ChildClass();
    const result = getParentClass(obj);
    expect(result).to.equal(ParentClass);
  });

  it('should use the "super_" property to get the parent class constructor if it exists', () => {
    function ctor() {}
    ctor.super_ = ParentClass
    const result = getParentClass(ctor);
    expect(result).to.equal(ParentClass);
  });

  it('should get the parent class constructor from the prototype chain if it is not defined directly on the constructor', () => {
    const GrandparentClass = function() {};
    const ParentClass = function() {};
    ParentClass.prototype = Object.create(GrandparentClass.prototype);
    ParentClass.prototype.constructor = ParentClass;
    const ChildClass = function() {};
    ChildClass.prototype = Object.create(ParentClass.prototype);
    ChildClass.prototype.constructor = ChildClass;
    const result = getParentClass(ChildClass);
    expect(result).to.equal(ParentClass);
  });

  it('should return null if there is no prototype chain', () => {
    const ctor = function() {};
    const result = getParentClass(ctor);
    expect(result).to.be.null;
  });

  it('should return null if the constructor argument is not a function or object', () => {
    const result = getParentClass('not a function or object');
    expect(result).to.be.undefined;
  });
});
