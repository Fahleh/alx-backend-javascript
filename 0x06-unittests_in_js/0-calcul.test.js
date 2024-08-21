const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('Floating point whole number for a and fractional number for b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('Floating point whole number for b and fractional number for a', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('Rounding down fractional number for a and b', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('Rounding up with floating whole number for a and fractional number for b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('Rounding up with floating whole number for b and fractional number for a', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('Rounding up with fractional numbers for a and b', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });
});
