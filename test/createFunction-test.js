var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var createFunction = require('../src/createFunction');

describe("createFunction", function() {
  it("should create an empty named function", function() {
    var fn;
    fn = createFunction("myFn");
    expect(fn).to.be.exist(Function, "fn");
    expect(fn).to.have.property('name', 'myFn');
    expect(fn).to.have.length(0);
  });

  it("should create an empty named function with args", function() {
    var fn;
    fn = createFunction("myFn", ['arg1', 'arg2']);
    expect(fn).to.exist(Function, "fn");
    expect(fn).to.have.property('name', 'myFn');
    expect(fn).to.have.length(2);
  });
  it("should create a function", function() {
    var fn;
    fn = createFunction("myFn", ['arg1', 'arg2'], "return arg1+arg2");
    expect(fn).to.exist(Function, "fn");
    expect(fn).to.have.property('name', 'myFn');
    expect(fn).to.have.length(2);
    expect(fn(10, 2)).to.be.equal(12);
  });
  it("should create a function without args", function() {
    var fn;
    fn = createFunction("myFn", "return 'hello!'");
    expect(fn).to.exist(Function, "fn");
    expect(fn).to.have.property('name', 'myFn');
    expect(fn).to.have.length(0);
    expect(fn()).to.be.equal("hello!");
  });
  it("should create a function with specified scope", function() {
    var b, fn;
    b = 123;
    fn = createFunction("myFn", ['arg1', 'arg2'], "return arg1+arg2+b", {
      b: b
    });
    expect(fn).to.exist(Function, "fn");
    expect(fn).to.have.property('name', 'myFn');
    expect(fn).to.have.length(2);
    expect(fn(10, 2)).to.be.equal(135);
  });
  it("should create a function with specified scope value array", function() {
    var b, fn;
    b = 123;
    fn = createFunction("myFn", ['arg1', 'arg2'], "return arg1+arg2+b", ['b'], [b]);
    expect(fn).to.exist(Function, "fn");
    expect(fn).to.have.property('name', 'myFn');
    expect(fn).to.have.length(2);
    expect(fn(10, 2)).to.be.equal(135);
  });
});
