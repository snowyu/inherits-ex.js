import assert from 'assert';
// import sinon from 'sinon'
import {_extend} from '../src/_extend'

describe('_extend', () => {
  it('should extend the target object with the properties of the source object', () => {
    const target = { a: 1 };
    const source = { b: 2 };
    const result = _extend(target, source);
    assert.deepStrictEqual(result, { a: 1, b: 2 });
  });

  it('should extend the target object with the properties of multiple source objects', () => {
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };
    const result = _extend(target, source1, source2);
    assert.deepStrictEqual(result, { a: 1, b: 2, c: 3 });
  });

  it('should only extend the target object with own properties of the source object', () => {
    const target = { a: 1 };
    const source = Object.create({ b: 2 });
    source.c = 3;
    const result = _extend(target, source);
    assert.deepStrictEqual(result, { a: 1, c: 3 });
  });

  it('should return the target object', () => {
    const target = { a: 1 };
    const source = { b: 2 };
    const result = _extend(target, source);
    assert.strictEqual(result, target);
  });

  it('should not modify the source objects', () => {
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };
    _extend(target, source1, source2);
    assert.deepStrictEqual(source1, { b: 2 });
    assert.deepStrictEqual(source2, { c: 3 });
  });

  it('should only extend the target object with enumerable properties of the source object', () => {
    const target = { a: 1 };
    const source = Object.create(null, {
      b: { value: 2 },
      c: { value: 3, enumerable: true }
    });
    const result = _extend(target, source);
    assert.deepStrictEqual(result, { a: 1, c: 3 });
  });
  it('should only extend the exists source object', () => {
    const target = { a: 1 };
    const source = Object.create(null, {
      b: { value: 2 },
      c: { value: 3, enumerable: true }
    });
    const result = _extend(target, source, null, undefined);
    assert.deepStrictEqual(result, { a: 1, c: 3 });
  });
});
