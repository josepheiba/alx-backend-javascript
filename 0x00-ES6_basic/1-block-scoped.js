export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const innerTask = true; // eslint-disable-line no-unused-vars
    const innerTask2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
