export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  //Returns the currency code
  get code() {
    return this._code;
  }

  //Sets tthe currency code
  set code(value) {
    this._code = value;
  }

  //Returns the name of the currency.
  get name() {
    return this._name;
  }

  //Sets the name of the currency.
  set name(value) {
    this._name = value;
  }

  // Returns the full representation of the currency.
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
