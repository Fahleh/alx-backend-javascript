const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let eyeOfOdin;

  beforeEach(() => {
    if (!eyeOfOdin) {
      eyeOfOdin = sinon.spy(console);
    }
  });

  afterEach(() => {
    eyeOfOdin.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);

    expect(eyeOfOdin.log.calledWith('The total is: 120')).to.be.true;
    expect(eyeOfOdin.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);

    expect(eyeOfOdin.log.calledWith('The total is: 20')).to.be.true;
    expect(eyeOfOdin.log.calledOnce).to.be.true;
  });
});
