import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    if (typeof value !== 'number') {
      throw new Error('Range must be a number');
    }
    this._range = value;
  }

  cloneCar() {
    return new Car();
  }
}
