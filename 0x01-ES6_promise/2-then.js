/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */

const handleResponseFromAPI = (promise) => promise.then(() => ({
  status: 200,
  body: 'Success',
})).catch(() => Error()).finally(() => {
  console.log('Got a response from the API');
});

export default handleResponseFromAPI;
