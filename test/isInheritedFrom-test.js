import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
const assert = chai.assert
const expect = chai.expect;
const should = chai.should();
chai.use(sinonChai);

import {isInheritedFrom} from '../src/isInheritedFrom';

describe("isInheritedFrom", function() {
  it("should check self circular", function() {
    function A() {}
    expect(isInheritedFrom(A, A, false)).to.be.equal(true);
    expect(isInheritedFrom(A, 'A', false)).to.be.equal(true);
  });
  it("should check dead circular", function() {
    var A, B, C, D;
    function A() {}
    function B() {}
    function C() {}
    function D() {}
    A.super_ = B;
    B.super_ = C;
    C.super_ = A;
    expect(isInheritedFrom(B, D, false)).to.be.equal(true);
    expect(isInheritedFrom(A, D, false)).to.be.equal(true);
    expect(isInheritedFrom(B, 'D', false)).to.be.equal(true);
    expect(isInheritedFrom(A, 'D', false)).to.be.equal(true);
  });
});
