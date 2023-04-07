import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
const expect = chai.expect;
chai.use(sinonChai);

import {defineProperty} from '../src/defineProperty';
const log             = console.log.bind(console)

describe('defineProperty', () => {
  it("should define a property", function() {
    var keys, obj;
    obj = {};
    defineProperty(obj, 'prop', 128);
    obj.should.have.property('prop', 128);
    keys = Object.keys(obj);
    return keys.should.have.length(0);
  });
  it("should define a property with getter", function() {
    var keys, obj;
    obj = {};
    defineProperty(obj, 'prop', null, {
      get: function() {
        return 128;
      },
      writable: false
    });
    obj.should.have.property('prop', 128);
    keys = Object.keys(obj);
    return keys.should.have.length(0);
  });
  it("should define an enumerable property", function() {
    var keys, obj;
    obj = {};
    defineProperty(obj, 'prop', 128, {
      enumerable: true
    });
    obj.should.have.property('prop', 128);
    keys = Object.keys(obj);
    return keys.should.be.deep.equal(['prop']);
  });
  it("should define a configurable property", function() {
    var obj;
    obj = {};
    defineProperty(obj, 'prop', 128);
    obj.should.have.property('prop', 128);
    delete obj.prop;
    return obj.should.not.have.ownProperty('prop');
  });
  it("should define a non-configurable property", function() {
    var obj;
    obj = {};
    defineProperty(obj, 'prop', 128, {
      configurable: false
    });
    obj.should.have.ownProperty('prop', 128);
    // the non-configurable property should not be deleted.
    try {
      delete obj.prop;
    } catch(_err) {}
    return obj.should.have.ownProperty('prop');
  });
  it("should define a property via options.value", function() {
    var obj;
    obj = {};
    defineProperty(obj, 'prop', void 0, {
      configurable: false,
      value: 128
    });
    return obj.should.have.property('prop', 128);
  });
  it('should define property with key,value argument', () => {
    var obj = {}
    expect(defineProperty(obj, 'foo', 'bar')).equal(obj)
    expect(obj).have.ownProperty( 'foo' , 'bar')
    var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
    expect(propDesc).to.have.property('writable', true)
    expect(propDesc).to.have.property('enumerable', false)
  })

  it('should define property with key, undefined, options argument', () => {
    var obj = {}
    defineProperty(obj, 'foo', undefined, {value: 'bar'})
    expect(obj).have.ownProperty( 'foo' , 'bar')
    var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
    expect(propDesc).to.have.property('writable', true)
    expect(propDesc).to.have.property('enumerable', false)
  })

  it('should define property with key,value, options argument', () => {
    var obj = {}
    defineProperty(obj, 'foo', 'bar', {value: 'xxx', writable: false, enumerable: true})
    expect(obj).have.ownProperty( 'foo' , 'bar')
    var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
    expect(propDesc).to.have.property('writable', false)
    expect(propDesc).to.have.property('enumerable', true)
  })

  it('should define property with key, undefined, get argument', () => {
    var obj = {}
    var getter = sinon.spy(() => 'bar')
    defineProperty(obj, 'foo', undefined, {get: getter, writable: false})
    expect(obj).have.ownProperty( 'foo' , 'bar')
    var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
    expect(propDesc).not.to.have.property('writable')
    expect(propDesc).to.have.property('enumerable', false)
    expect(propDesc).to.have.property('get', getter)
  })

  it('should define property with key, undefined, get/set argument', () => {
    var obj = {}
    var getter = sinon.spy(() => 'bar')
    var setter = sinon.spy()
    defineProperty(obj, 'foo', undefined, {get: getter, set: setter, writable: false})
    expect(obj).have.ownProperty( 'foo' , 'bar')
    var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
    expect(propDesc).not.to.have.property('writable')
    expect(propDesc).to.have.property('enumerable', false)
    expect(propDesc).to.have.property('get', getter)
    expect(propDesc).to.have.property('set', setter)
    obj.foo = 1
    expect(setter.callCount).equal(1)
  })
});
