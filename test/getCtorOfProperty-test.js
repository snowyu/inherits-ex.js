import chai from 'chai'
// import sinon from 'sinon'
import sinonChai from 'sinon-chai'
const expect = chai.expect;
const should = chai.should();
chai.use(sinonChai);

import {inheritsDirectly as extend} from '../src/inheritsDirectly';
import {getCtorOfOwnProperty} from '../src/getCtorOfProperty';

describe("getCtorOfProperty", function() {
  it("should get the constructor which owned the property", function() {
    var A, B, C, result;
    function A() {}
    A.prototype.a = 1;
    function B() {
      return B.__super__.constructor.apply(this, arguments);
    }

    B.prototype.b = 2;
    extend(B, A);
    function C() {
      return C.__super__.constructor.apply(this, arguments);
    }

    C.prototype.c = 3;
    extend(C, B);
    result = getCtorOfOwnProperty(C, 'c');
    result.should.be.equal(C);
    result = getCtorOfOwnProperty(C, 'b');
    result.should.be.equal(B);
    result = getCtorOfOwnProperty(C, 'a');
    result.should.be.equal(A);
    result = getCtorOfOwnProperty(C, 'no');
    should.not.exist(result);
  });
});
