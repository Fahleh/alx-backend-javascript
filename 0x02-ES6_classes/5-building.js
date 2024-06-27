export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  //Returns the size of the building in square feet.
  get sqft() {
    return this._sqft;
  }

  //Sets the size of the building in square feet
  set sqft(value) {
    this._sqft = value;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
