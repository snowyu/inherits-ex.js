import { inheritsDirectly as inherits, getRootCtor } from './lib/index.mjs';

// 继承链: Dog -> Animal -> Object
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a noise.`); }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() { console.log(`${this.name} barks.`); }
}

// 另一个独立的父类
class Vehicle {
  constructor(speed) { this.speed = speed; }
  move() { console.log(`Moving at speed ${this.speed}`); }
}

// 1. 找到 Dog 的根ctor (Animal)
const rootCtor = getRootCtor(Dog);
console.log(rootCtor.name); // "Animal"

// 2. 让根ctor (Animal) 继承 Vehicle
inherits(rootCtor, Vehicle);

// 结果: Dog -> Animal -> Vehicle -> Object
const dog = new Dog('Buddy', 'Husky');
dog.speak(); // Animal的方法: Buddy makes a noise.
dog.move();  // Vehicle的方法: Moving at speed undefined
