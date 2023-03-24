import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
const assert = chai.assert
const expect = chai.expect;
const should = chai.should();
chai.use(sinonChai);

import {replaceCtor} from '../src/replaceCtor';

describe("replaceCtor", function() {
  return it("should replace an object's constructor", function() {
    var A, B, result;
    A = (function() {
      function A() {}

      return A;

    })();
    B = (function() {
      function B() {}

      return B;

    })();
    result = new A;
    replaceCtor(result, B);
    expect(result).to.have.property('Class', B);
    expect(result).to.be.instanceOf(B);
  });
});
