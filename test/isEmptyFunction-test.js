var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var isEmptyFunction = require("../src/isEmptyFunction");

chai.use(sinonChai);

describe("isEmptyFunction", function() {
  it("should test empty functions", function() {
    var emptyFunc;
    emptyFunc = function() {};
    expect(isEmptyFunction(emptyFunc)).to.be["true"]("emptyFunc");
    emptyFunc = function(abc, ase) {};
    expect(isEmptyFunction(emptyFunc)).to.be["true"]("emptyFunc2");
    emptyFunc = Function('arg1', 'arg2', '\n;');
    expect(isEmptyFunction(emptyFunc)).to.be["true"];
    emptyFunc = Function('arg1', 'arg2', 'arg3', 'abs;');
    expect(isEmptyFunction(emptyFunc)).to.not.be["true"];
  });
  return it("should support istanbul hooked empty function", function() {
    function Test(location){__cov_jOpjHgc_dBxBGFBAhmJ5rg.f['5']++;};
    expect(isEmptyFunction(Test, true)).to.be["true"]("istanbul");
  });
});
