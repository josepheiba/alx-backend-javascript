export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const innerTask = true; // eslint-disable-line no-unused-vars
    const innerTask2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
