chai            = require('chai')
sinon           = require('sinon')
sinonChai       = require('sinon-chai')
assert          = chai.assert
expect          = chai.expect
should          = chai.should()

inherits        = require('../src/inherits')
inheritsDirectly= require('../src/inheritsDirectly')
inheritsObject  = require('../src/inheritsObject')
mixin           = require('../src/mixin')
isInheritedFrom = require('../src/isInheritedFrom')
isMixinedFrom   = require('../src/isMixinedFrom')
createObject    = require('../src/createObject')
createObjectWith= require('../src/createObjectWith')
getProtoChain   = require('../src/getProtoChain')

log             = console.log.bind(console)
chai.use(sinonChai)

describe("mixin es6", function(){
  it("test mixin with super", function(){
    let mCallOrder = [];
    class A {
      m(){
        mCallOrder.push('A')
      }
    }
    class A1 extends A{
      m1(){
        mCallOrder.push('A1m1');
        super.m();
      }
      m(){
        mCallOrder.push('A1');
        super.m();
      }
    }
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
    o = new B1()
    o.m("a", 12) // call chain:  B1::m -> A1::m -> A::m
    mCallOrder.should.be.deep.equal ['B1', 'A1', 'A']
  })
})
