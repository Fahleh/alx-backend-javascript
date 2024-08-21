const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const eyeOfOdin = sinon.spy(console);

    const stubResponse = sinon.stub(Utils, 'calculateNumber');

    stubResponse.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(stubResponse.calledWith('SUM', 100, 20)).to.be.true;
    expect(stubResponse.callCount).to.be.equal(1);
    expect(eyeOfOdin.log.calledWith('The total is: 10')).to.be.true;
    expect(eyeOfOdin.log.callCount).to.be.equal(1);

    stubResponse.restore();
    eyeOfOdin.log.restore();
  });
});
