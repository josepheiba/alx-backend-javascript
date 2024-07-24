/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */

const getFullResponseFromAPI = (success) => new Promise((resolve, reject) => {
  if (success) {
    resolve({
      status: 200,
      body: 'Success',
    });
  } else {
    reject(new Error('The fake API is not working currently'));
  }
});

export default getFullResponseFromAPI;
