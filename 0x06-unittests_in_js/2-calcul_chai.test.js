const assert = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('Floating whole numbers(negative)', () => {
      expect(calculateNumber('SUM', -2.0, -3.0)).to.equal(-5);
    });

    it('Floating whole numbers(positive)', () => {
      expect(calculateNumber('SUM', 2.0, 3.0)).to.equal(5);
    });

    it('Floating whole numbers(mixed signs)', () => {
      expect(calculateNumber('SUM', -2.0, 3.0)).to.equal(1);
    });

    it('Floating fractions (negative)', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });

    it('Floating fractions (positive)', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });

    it('Floating fractions(mixed signs)', () => {
      expect(calculateNumber('SUM', -2.3, 1.8)).to.equal(0);
    });

    it('Negative Integers', () => {
      expect(calculateNumber('SUM', -2, -3)).to.equal(-5);
    });

    it('Positive Integers', () => {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });

    it('Mixed signed integers', () => {
      expect(calculateNumber('SUM', 2, -3)).to.equal(-1);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('Floating whole numbers(negative)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -3.0), 1);
      expect(calculateNumber('SUM', 2, -3)).to.equal(-1);
    });

    it('Floating whole numbers(positive)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 3.0), -1);
      expect(calculateNumber('SUM', 2, -3)).to.equal(-1);
    });

    it('Floating whole numbers(mixed signs)', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 3.0)).to.equal(-5);
    });

    it('Floating fractions (negative)', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(4);
    });

    it('Floating fractions (positive)', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    });

    it('Floating fractions(mixed signs)', () => {
      expect(calculateNumber('SUBTRACT', -2.3, 1.8)).to.equal(-4);
    });

    it('Negative Integers', () => {
      expect(calculateNumber('SUBTRACT', -2, -3)).to.equal(1);
    });

    it('Positive Integers', () => {
      expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
    });

    it('Mixed signed integers', () => {
      expect(calculateNumber('SUBTRACT', 2, -3)).to.equal(5);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('Floating whole numbers(negative)', () => {
      expect(calculateNumber('DIVIDE', -8.0, -2.0)).to.equal(4);
    });

    it('Floating whole numbers(positive)', () => {
      expect(calculateNumber('DIVIDE', 6.0, 3.0)).to.equal(2);
    });

    it('Floating whole numbers(mixed signs)', () => {
      expect(calculateNumber('DIVIDE', -9.0, 3.0)).to.equal(-3);
    });

    it('Floating fractions (negative)', () => {
      expect(calculateNumber('DIVIDE', -8.3, -1.8)).to.equal(4);
    });

    it('Floating fractions (positive)', () => {
      expect(calculateNumber('DIVIDE', 6.3, 2.8)).to.equal(2);
    });

    it('Floating fractions(mixed signs)', () => {
      expect(calculateNumber('DIVIDE', -9.3, 2.8)).to.equal(-3);
    });

    it('Negative Integers', () => {
      expect(calculateNumber('DIVIDE', -8, -2)).to.equal(4);
    });

    it('Positive Integers', () => {
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });

    it('Mixed signed integers', () => {
      expect(calculateNumber('DIVIDE', 9, -3)).to.equal(-3);
    });
  });
});
