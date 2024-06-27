export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') throw new Error();
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](value) {
    if (value === 'string') {
      return this._location;
    }
    if (value === 'number') {
      return this._size;
    }
    return this;
  }
}
