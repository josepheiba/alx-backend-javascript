/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */ // Disable specific ESLint rule for rejection errors

const getFullResponseFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently')); // Ensure rejection reason is an Error object
    }
  });
};

export default getFullResponseFromAPI;
