export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    if (typeof brand !== 'string') {
      throw new Error('Brand must be a string');
    }
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value !== 'string') {
      throw new Error('Motor must be a string');
    }
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    if (typeof color !== 'string') {
      throw new Error('Color must be a string');
    }
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species(this._brand, this._motor, this._color);
  }
}
