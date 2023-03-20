var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

createCtor = require('../src/createCtor');
isInheritedFrom = require('../src/isInheritedFrom');

describe("createCtor", function() {
  it("should create a contructor function", function() {
    var ctor;
    ctor = createCtor("MyClass");
    expect(ctor).to.exist();
    expect(ctor).to.have.property('name', 'MyClass');
    expect(ctor.toString()).to.have.string('return MyClass.__super__.constructor.apply(this, arguments)');
  });
  it("should create a contructor function with arguments", function() {
    var ctor, s;
    ctor = createCtor("MyClass", ['arg1', 'arg2']);
    expect(ctor).to.exist();
    expect(ctor).to.have.property('name', 'MyClass');
    s = ctor.toString();
    expect(s).to.have.string('return MyClass.__super__.constructor.apply(this, arguments)');
    expect(s).to.have.string('arg1, arg2');
  });
  it("should create a contructor function with body", function() {
    var ctor, s;
    ctor = createCtor("MyClass", "return 13414;");
    expect(ctor).to.exist();
    expect(ctor).to.have.property('name', 'MyClass');
    s = ctor.toString();
    expect(s).to.have.string('return 13414;');
  });
  return it("should create a contructor function with arguments and body", function() {
    var ctor, s;
    ctor = createCtor("MyClass", ['arg1', 'arg2'], "return 13414;");
    expect(ctor).to.exist();
    expect(ctor).to.have.property('name', 'MyClass');
    s = ctor.toString();
    expect(s).to.have.string('return 13414;');
    expect(s).to.have.string('arg1, arg2');
  });
});

