const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const eyeOfOdin = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);

    expect(eyeOfOdin.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(eyeOfOdin.calculateNumber.callCount).to.be.equal(1);

    eyeOfOdin.calculateNumber.restore();
  });
});
