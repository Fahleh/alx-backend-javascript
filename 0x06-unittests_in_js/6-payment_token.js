const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve) => {
    if (!success) return;

    resolve({ data: 'Successful response from the API' });
  });
};

module.exports = getPaymentTokenFromAPI;
