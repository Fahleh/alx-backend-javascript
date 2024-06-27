import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Returns the amount
  get amount() {
    return this._amount;
  }

  // Sets the amount
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  // Returns the currency
  get currency() {
    return this._currency;
  }

  // Sets the currency
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  // Returns the full prices in the format 'amountt name currency code'.
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Returns the converted amount based on the currency rate.
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
