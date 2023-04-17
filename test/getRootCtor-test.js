import chai from 'chai'
import sinonChai from 'sinon-chai'
const expect = chai.expect;
chai.use(sinonChai);

import {getRootCtor}from '../src/getRootCtor';

describe("getRootCtor", function() {
  class Creature {}
  class Animal extends Creature {}
  class Bird extends Creature {}
  class Rabbit extends Animal {}

  it("should getRootCtor correctly", function() {
    expect(getRootCtor(Rabbit)).to.equal(Creature)
    expect(getRootCtor(Bird)).to.equal(Creature)
    expect(getRootCtor(Object)).to.equal(Object)
  });
  it("should getRootCtor with specified rootCtor correctly", function() {
    expect(getRootCtor(Rabbit, Creature)).to.equal(Animal)
  });
});

