const createInt8TypedArray = (length, position, value) => {
  // Check if the position is within the bounds of the array
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  // Create a DataView to interact with the ArrayBuffer
  const dataView = new DataView(buffer);

  // Set the value at the specified position as an Int8 value
  dataView.setInt8(position, value);

  return dataView;
};

export default createInt8TypedArray;
