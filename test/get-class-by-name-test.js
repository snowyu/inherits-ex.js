import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
const expect = chai.expect;
chai.use(sinonChai);

import {getClassByName} from '../src/get-class-by-name'

const log             = console.log.bind(console)

describe('getClassByName', () => {
  it('should get class directly', () => {
    function Abc() {}
    expect(getClassByName(Abc)).to.equal(Abc)
  });

  it('should get class by name with scope object', () => {
    function Abc() {}

    var scope = {Abc: Abc}
    expect(getClassByName('Abc', scope)).to.equal(Abc)
    expect(getClassByName('bc', scope)).to.equal(undefined)
    expect(getClassByName('Abc')).to.equal(undefined)
  });

  it('should get class by name with scope string[]', () => {
    function Abc() {}

    expect(getClassByName('Abc', ['Abc'], [Abc])).to.equal(Abc)
  });

  it('should get class by name with scope Function[]', () => {
    function Abc() {}

    expect(getClassByName('Abc', [Abc])).to.equal(Abc)
  });

  it('should get class by name with scope Function', () => {
    function Abc() {}
    var scope = sinon.spy(()=>Abc)

    expect(getClassByName('Abc', scope)).to.equal(Abc)
    expect(scope.calledOnce).to.be.true
    expect(scope.calledWith('Abc')).to.be.true
  });
});
