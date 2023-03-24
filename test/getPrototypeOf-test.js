import chai from 'chai'
// import sinon from 'sinon'
import sinonChai from 'sinon-chai'
const expect = chai.expect;
const should = chai.should();
chai.use(sinonChai);

import {getPrototypeOf} from '../src/getPrototypeOf';

describe("getPrototypeOf", function() {
  return it("should get PrototypeOf object", function() {
    var Abc, obj, result;
    Abc = (function() {
      function Abc() {}

      return Abc;

    })();
    obj = new Abc;
    result = getPrototypeOf(obj);
    expect(result).to.exist;
    expect(result).to.be.equal(Abc.prototype);
  });
});
