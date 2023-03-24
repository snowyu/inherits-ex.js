import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
const assert = chai.assert
const expect = chai.expect;
const should = chai.should();
chai.use(sinonChai);

import {InheritsEx} from '../src/inherits-ex';
import {isInheritedFrom} from '../src/isInheritedFrom';

describe("inheritsEx", function() {
  const inherits = InheritsEx.execute;
  it("should inherits from string", function() {
    function A() {}
    function B() {}

    expect(inherits('A', 'B', [A, B])).to.be["true"];
    expect(isInheritedFrom(A, B, false)).to.be.equal(A);
    expect(isInheritedFrom(B, 'A', false)).to.be.equal(false);
  });
  it("should inherits from array", function() {
    function A() {}
    function B() {}
    function Root() {}
    expect(inherits('A', ['B', 'Root'], [A, B, Root])).to.be["true"];
    expect(isInheritedFrom(A, B, false)).to.be.equal(A);
    expect(isInheritedFrom(A, Root, false)).to.be.equal(B);
    expect(isInheritedFrom(B, 'A', false)).to.be.equal(false);
  });
  it("should inherits with scope array", function() {
    function A() {}
    function B() {}
    function Root() {}
    InheritsEx.setScope([A, B, Root]);
    try {
      expect(inherits('A', ['B', 'Root'])).to.be["true"];
      expect(isInheritedFrom(A, B, false)).to.be.equal(A);
      expect(isInheritedFrom(A, Root, false)).to.be.equal(B);
      expect(isInheritedFrom(B, 'A', false)).to.be.equal(false);
    } finally {
      InheritsEx.scope = {};
    }
  });
  return it("should inherits with scope object", function() {
    function A() {}
    function B() {}
    function Root() {}
    InheritsEx.setScope({
      B: B,
      Root: Root
    });
    try {
      expect(inherits(A, ['B', 'Root'])).to.be["true"];
      expect(isInheritedFrom(A, B, false)).to.be.equal(A);
      expect(isInheritedFrom(A, Root, false)).to.be.equal(B);
      expect(isInheritedFrom(B, 'A', false)).to.be.equal(false);
      expect(InheritsEx.scope).to.has.property('A', A);
    } finally {
      InheritsEx.scope = {};
    }
  });
});
