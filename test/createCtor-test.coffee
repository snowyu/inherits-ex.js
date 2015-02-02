chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
assert          = chai.assert
should          = chai.should()
chai.use(sinonChai)

createCtor      = require '../src/createCtor'
isInheritedFrom = require '../src/isInheritedFrom'

describe "createCtor", ->
  it "should create a contructor function", ->
    ctor = createCtor "MyClass"
    should.exist ctor, "ctor"
    ctor.should.have.property 'name', 'MyClass'
    ctor.toString().should.have.string 'return MyClass.__super__.constructor.apply(this, arguments)'
