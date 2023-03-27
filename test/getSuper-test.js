import chai from 'chai'
import sinonChai from 'sinon-chai'
const expect = chai.expect;
chai.use(sinonChai);

import {getSuper}from '../src/getSuper';

describe("getSuper", function() {
  class Creature {
    walk() {
      return 'Creature';
    }
  }
  class Animal extends Creature {
    walk() {
      return 'Animal '+ getSuper(this).walk();
    }
  }
  class Rabbit extends Animal {
    walk() {
      return 'Rabbit hops ' + getSuper(this).walk();
    }
  }

  it("should getSuper from parent class correctly", function() {
    const r = new Rabbit
    const result = r.walk()
    expect(result).to.equal('Rabbit hops Animal Creature')
  });
});

