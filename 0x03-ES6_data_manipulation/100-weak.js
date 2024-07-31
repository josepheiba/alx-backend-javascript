// Create and export a WeakMap to keep track of endpoint query counts
export const weakMap = new WeakMap();

// Function to handle API queries and track the number of queries per endpoint
export const queryAPI = (endpoint) => {
  // Check if the endpoint already exists in the WeakMap
  if (!weakMap.has(endpoint)) {
    // Initialize the count to 0 if it's a new endpoint
    weakMap.set(endpoint, 0);
  }
  // Get the current count for the endpoint
  const count = weakMap.get(endpoint);
  // Increment the count
  weakMap.set(endpoint, count + 1);
  // Check if the count is 5 or more and throw an error if true
  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
};
