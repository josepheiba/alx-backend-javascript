const cleanSet = (set, startString) => [...set]
  .filter((value) => value.startsWith(startString)) // Step 1: Filter values
  .map((value) => value.slice(startString.length)) // Step 2: Remove startString
  .join('-');

export default cleanSet;
