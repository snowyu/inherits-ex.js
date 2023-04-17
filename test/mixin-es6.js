import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
const assert = chai.assert
const expect = chai.expect;
const should = chai.should();
chai.use(sinonChai);

import {inherits}         from '../src/inherits'
import {inheritsDirectly} from '../src/inheritsDirectly'
import {inheritsObject}   from '../src/inheritsObject'
import {mixin}            from '../src/mixin'
import {isInheritedFrom}  from '../src/isInheritedFrom'
import {isMixinedFrom}    from '../src/isMixinedFrom'
import {createObject}     from '../src/createObject'
import {createObjectWith} from '../src/createObjectWith'
import {getProtoChain}    from '../src/getProtoChain'

const log             = console.log.bind(console)

describe("mixin es6", function(){
  it("test mixin with super", function(){
    let mCallOrder = [];
    class A {
      m(){
        mCallOrder.push('A')
      }
    }
    class A1 extends A{
      mo() {
        mCallOrder.push('A1mo')
      }
      m1(){
        mCallOrder.push('A1m1');
        super.m();
      }
      m(){
        mCallOrder.push('A1');
        super.m();
      }
    }
    A1.prototype.prop1 = 2;
    class B {
      m(){
        mCallOrder.push('B');
      }
    }
    class B1 {
      m(){
        mCallOrder.push('B1');
        super.m();
      }
    }
    inherits(B1, B)

    mixin(B1, A1).should.be.equal(true, 'mixin');
    // log(getProtoChain(B1))
    const o = new B1()
    expect(o.prop1).to.be.equal(2)
    // o.should.have.property('prop1', 2)
    o.m("a", 12) // call chain:  B1::m -> A1::m -> A::m
    mCallOrder.should.be.deep.equal(['B1', 'A1', 'A'])
    mCallOrder = []
    o.mo()
    mCallOrder.should.be.deep.equal(['A1mo'])
    mCallOrder = []
    o.m1()
    mCallOrder.should.be.deep.equal(['A1m1', 'A'])
    mCallOrder = []
  })
  it("test mixin static with super", function(){
    let mCallOrder = [];
    class A {
      static sm() {
        mCallOrder.push('Asm')
      }
    }
    class A1 extends A{
      static sm() {
        mCallOrder.push('A1sm')
        super.sm()
      }
    }
    class B1 {
    }

    mixin(B1, A1).should.be.equal(true, 'mixin');
    B1.sm()
    mCallOrder.should.be.deep.equal(['A1sm', 'Asm'])
  })
})
