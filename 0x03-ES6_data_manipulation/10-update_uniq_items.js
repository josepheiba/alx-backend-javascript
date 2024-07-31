const updateUniqueItems = (map) => {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  // Iterate through the map entries and update the quantity if it's 1
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
};

export default updateUniqueItems;
