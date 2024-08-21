const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('Floating whole numbers(negative)', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -3.0), -5);
    });

    it('Floating whole numbers(positive)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 3.0), 5);
    });

    it('Floating whole numbers(mixed signs)', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 3.0), 1);
    });

    it('Floating fractions (negative)', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('Floating fractions (positive)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('Floating fractions(mixed signs)', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, 1.8), 0);
    });

    it('Negative Integers', () => {
      assert.strictEqual(calculateNumber('SUM', -2, -3), -5);
    });

    it('Positive Integers', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });

    it('Mixed signed integers', () => {
      assert.strictEqual(calculateNumber('SUM', 2, -3), -1);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('Floating whole numbers(negative)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -3.0), 1);
    });

    it('Floating whole numbers(positive)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 3.0), -1);
    });

    it('Floating whole numbers(mixed signs)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 3.0), -5);
    });

    it('Floating fractions (negative)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 4);
    });

    it('Floating fractions (positive)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('Floating fractions(mixed signs)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, 1.8), -4);
    });

    it('Negative Integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2, -3), 1);
    });

    it('Positive Integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 3), -1);
    });

    it('Mixed signed integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, -3), 5);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('Floating whole numbers(negative)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.0, -2.0), 4);
    });

    it('Floating whole numbers(positive)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.0, 3.0), 2);
    });

    it('Floating whole numbers(mixed signs)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9.0, 3.0), -3);
    });

    it('Floating fractions (negative)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.3, -1.8), 4);
    });

    it('Floating fractions (positive)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.3, 2.8), 2);
    });

    it('Floating fractions(mixed signs)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9.3, 2.8), -3);
    });

    it('Negative Integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8, -2), 4);
    });

    it('Positive Integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    });

    it('Mixed signed integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9, -3), -3);
    });
  });
});
