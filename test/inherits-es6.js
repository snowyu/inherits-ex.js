var chai            = require('chai')
var sinon           = require('sinon')
var sinonChai       = require('sinon-chai')
var assert          = chai.assert
var expect          = chai.expect
var should          = chai.should()

var inherits        = require('../src/inherits')
var inheritsDirectly= require('../src/inheritsDirectly')
var inheritsObject  = require('../src/inheritsObject')
var mixin           = require('../src/mixin')
var isInheritedFrom = require('../src/isInheritedFrom')
var isMixinedFrom   = require('../src/isMixinedFrom')
var createObject    = require('../src/createObject')
var createObjectWith= require('../src/createObjectWith')
var getProtoChain   = require('../src/getProtoChain')
var getPrototypeOf  = require('../src/getPrototypeOf')

var log             = console.log.bind(console)

chai.use(sinonChai)


var compareProtoChain = function(o, list){
  var p = getProtoChain(o)
  for (var i=0; i < p.length; i++) {
    n=p[i]
    if (n !== list[i]) return false
  }
  return true
}

describe("inheritsES6", function() {

  aMethod = () => "aMethod"
  a1Method = () => "a1Method"

  class Root {
    // static test= 1;
    constructor(inited="Root", other) {
      this.inited= this.inited
      this.other = other
      return "Root"
    }
    rootMethod(){}
  }
  Root.test = 1

  class B {
    constructor(inited="B") {
      this.inited=inited
      return "B"
    }
    bMethod(){}
  }

  class A {
  }
  A.prototype.aMethod = aMethod
  assert.equal(inherits(A, Root), true)

  class A1 {
    constructor(inited = "A1") {
      this.inited = inited
      return "A1"
    }
  }
  A1.prototype.a1Method = a1Method
  inherits(A1,A)

  it("test inherits with none static inheritance", function() {
    class R{
      // static test = 1
      constructor(inited="R", other){
        this.inited=inited
        this.other=other
        return "R"
      }
      rootMethod(){}
    }
    R.test = 1

    class R1{
      constructor(inited="B"){
        this.inited=inited
        return "B"
      }
      bMethod(){}
    }

    assert.equal(inherits(R1, R, false), true)
    assert.isUndefined(R1.test)
  })

  it("test inherits and isInheritedFrom", function(){
    assert.equal(inherits(A, Root), false)
    assert.equal(inherits(B, Root), true)
    assert.equal(A.test, 1)
    assert.equal(B.test, 1)
    assert.equal(A1.test, 1)
    assert.ok(Root.isPrototypeOf(A1))
    assert.equal(A1.super_, A)
    assert.notOk(A1.propertyIsEnumerable('super_'))
    assert.notOk(A1.propertyIsEnumerable('__super__'))
    assert.equal(A1.prototype.a1Method, a1Method)
    assert.equal(A.prototype.aMethod, aMethod)
    assert.equal(A1.prototype.constructor, A1)
    assert.equal(inherits(A1, Root), false, "A1 can not inherit Root again")
    assert.equal(A1.super_, A)
    assert.equal(A.super_, Root)
    assert.equal(Root.super_, undefined)
    assert.equal(isInheritedFrom(A, Root), A)
    assert.equal(isInheritedFrom(A1, Root), A)
    assert.equal(isInheritedFrom(A1, A), A1)
    assert.equal(isInheritedFrom(A1, B), false, "A1 is not inherited from B")
    assert.equal(isInheritedFrom(A, B), false, "A is not inherited from B")
    o = new A()
    assert.equal(o.rootMethod, Root.prototype.rootMethod)
    o = new A1()
    assert.equal(o.rootMethod, Root.prototype.rootMethod)
    assert.deepEqual(getProtoChain(A1), [ 'Root', 'A', 'A1' ])
  })
  it("should not inheritances dead circular", function(){
    class C1{}
    class C2{}
    class C3{}
    assert.equal(inherits(C1, C2), true)
    assert.equal(inherits(C2, C3), true)
    assert.equal(inherits(C3, C1), false)
  })

  it("should multi-inheritances", function(){
    class C{}
    class D{}
    class E{}
    class MyClass{}
    // MyClass -> C -> D -> E
    assert.equal(inherits(MyClass, [C, D, E]), true)
    assert.deepEqual(getProtoChain(MyClass), ['E', 'D', 'C', 'MyClass'])
  })
  it("should multi-inheritances and void circular inherit", function(){
    class C{}
    class MyClass{}
    assert.equal(inherits(C, Root), true)

    //# MyClass -> B -> Root
    assert.equal(inherits(MyClass, B), true)

    //# MyClass -> C -> B -> Root
    assert.equal(inherits(MyClass, C), true)
    assert.deepEqual(getProtoChain(MyClass), [ 'Root', 'B', 'C', 'MyClass'])
    assert.equal(isInheritedFrom(MyClass, C), MyClass)
    assert.equal(isInheritedFrom(MyClass, B), C)
    assert.equal(isInheritedFrom(MyClass, 'C'), MyClass)
    assert.equal(isInheritedFrom(MyClass, 'B'), C)
  })
  it("test isInheritedFrom with class name", function(){
    isInheritedFrom = isInheritedFrom
    assert.equal(isInheritedFrom(A, 'Root'), A)
    assert.equal(isInheritedFrom(A1, 'Root'), A)
    assert.equal(isInheritedFrom(A1, 'A'), A1)
    assert.equal(isInheritedFrom(A1, 'B'), false, "A1 is not inherited from B")
    assert.equal(isInheritedFrom(A, 'B'), false, "A is not inherited from B")
  })

  it("test inheritsObject", function(){
    cMethod = ()=> "cMethod"
    C = function(){return  "C"}

    C.name = "C"
    C.prototype.cMethod = cMethod
    b = new B()
    assert.equal(inheritsObject(b, C), true)
    bProto = b.__proto__
    assert.equal(bProto.cMethod, cMethod)
    assert.equal(bProto.constructor, C)
    assert.equal(C.super_, B)
    b1 = new B()
    assert.equal(inheritsObject(b1, C), true)
    bProto = b1.__proto__
    assert.equal(bProto.cMethod, cMethod)
    assert.equal(bProto.constructor, C)
    assert.equal(bProto, C.prototype)
  })
  it("test inheritsDirectly and isInheritedFrom", function(){
    cMethod = ()=> "cMethod"
    R = function(){return  "R"}
    R.name = "R"
    C = function(){return  "C"}
    C.name = "C"
    C.prototype.cMethod = cMethod

    C1 = ()=> "C1"
    C1.name = "C1"
    C11 = ()=> "C11"
    C11.name = "C11"
    C2 = ()=> "C2"

    assert.ok(inherits(C, R), "C inherits from R")
    assert.ok(inherits(C1, C), "C1 inherits from C")
    assert.ok(inherits(C11, C1), "C11 inherits from C1")
    assert.ok(inherits(C2, C), "C2 inherits from C")
    //# C11 > C1 > C
    baseClass = isInheritedFrom(C11, C)
    assert.equal(baseClass, C1)
    inheritsDirectly(baseClass, C2)
    //# C11 > C1 > C2 > C
    assert.equal(isInheritedFrom(C11, C2), C1, "C11 > C2")
    assert.equal(isInheritedFrom(C11, C1), C11, "C11 > C1")
    assert.equal(isInheritedFrom(C11, C), C2, "C11 > C")
  })
  it("test Es6 isIneritedFrom", function() {
    class R{}
    class C extends R{}
    class C1 extends C{}
    class C11 extends C1{}
    class C2 extends C{}
    //# C11 > C1 > C
    baseClass = isInheritedFrom(C11, C)
    assert.equal(baseClass, C1)
    inheritsDirectly(baseClass, C2)
    //# C11 > C1 > C2 > C
    assert.equal(isInheritedFrom(C11, C2), C1, "C11 > C2")
    assert.equal(isInheritedFrom(C11, C1), C11, "C11 > C1")
    assert.equal(isInheritedFrom(C11, C), C2, "C11 > C")
  })
  it("test Es6 class and function mixed super()", function() {
    var mCallOrder = []
    class R{
      m(){
        mCallOrder.push('R')
      }
    }
    class T extends R{
      m() {
        super.m(...arguments);
        mCallOrder.push('T');
      }
    }
    function T1(){}
    T1.prototype.m = function() {
      var vSuper = getPrototypeOf(T1);
      vSuper.prototype.m.call(this);
      mCallOrder.push('T1');
    }
    class T11{
      m() {
        super.m(...arguments);
        mCallOrder.push('T11');
      }
    }

    assert.equal(inherits(T11, T1), true, 'inherits T11, T1')
    assert.equal(inherits(T1, T), true, 'inherits T1, T')
    var a= new T11
    a.m()
    assert.deepEqual(mCallOrder, [ 'R', 'T', 'T1', 'T11' ])
  })


  describe("createObject", function(){

    it('should create object with ES6 class', function(){
      class A {}
      result = createObject(A)
      result.should.be.instanceof(A)
      A.should.not.have.ownProperty('Class')
    })
    it.skip('should call the parent\'s constructor method if it no constructor', function(){
      function A12() {}
      assert.equal(inherits(A12, A1), true)
      a = createObject(A12)
      assert.equal(a.Class, A12)
      assert.instanceOf(a, A12)
      assert.instanceOf(a, A1)
      assert.instanceOf(a, A)
      assert.instanceOf(a, Root)
      assert.equal(a.inited, "A1")
    })
    it.skip('should call the root\'s constructor method if its parent no constructor yet', function(){
      //ES6 Class can not supports this.
      //the class X defined, toString should be 'class X{}', not 'function X(){}'
      function A2(){}
      assert.equal(inherits(A2, A), true)
      a = createObject(A2)
      assert.equal(a.Class, A2)
      assert.instanceOf(a, A2)
      assert.instanceOf(a, A)
      assert.instanceOf(a, Root)
      assert.equal(a.inited, "Root")
    })
    it('should pass the correct arguments to init', function(){
      class A2 {
        constructor(inited, other){
          this.inited = inited
          this.other = other
        }
      }
      assert.equal(inherits(A2, A), true)
      a = createObject(A2, "hiFirst", 1881)
      assert.instanceOf(a, A2)
      assert.instanceOf(a, A)
      assert.instanceOf(a, Root)
      assert.equal(a.inited, "hiFirst")
      assert.equal(a.other, 1881)
    })
    it('should add new "Class" property to the class prototype', function() {
      class A2{}
      a = createObject (A2)
      assert.instanceOf(a, A2)
      a.should.have.property('Class', A2)
    })
  })
})

