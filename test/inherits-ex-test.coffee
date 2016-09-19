chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
assert          = chai.assert
should          = chai.should()
chai.use(sinonChai)

InheritsEx      = require '../src/inherits-ex'
isInheritedFrom = require '../src/isInheritedFrom'


describe "inheritsEx", ->
  inherits = InheritsEx.execute
  it "should inherits from string", ->
    class A
    class B
    inherits('A', 'B', [A, B]).should.be.true
    isInheritedFrom(A, B, false).should.be.equal A
    isInheritedFrom(B, 'A', false).should.be.equal false
  it "should inherits from array", ->
    class A
    class B
    class Root
    inherits('A', ['B', 'Root'], [A, B, Root]).should.be.true
    isInheritedFrom(A, B, false).should.be.equal A
    isInheritedFrom(A, Root, false).should.be.equal B
    isInheritedFrom(B, 'A', false).should.be.equal false
  it "should inherits with scope", ->
    class A
    class B
    class Root
    InheritsEx.scope = [A, B, Root]
    try
      inherits('A', ['B', 'Root']).should.be.true
      isInheritedFrom(A, B, false).should.be.equal A
      isInheritedFrom(A, Root, false).should.be.equal B
      isInheritedFrom(B, 'A', false).should.be.equal false
    finally
      InheritsEx.scope = null
