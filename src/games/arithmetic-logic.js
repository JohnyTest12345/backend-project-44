const getRandomInt = (max) => Math.floor(Math.random() * max);
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getTask() {
  const task = [];

  const strArr = [];

  let number = getRandomInt(100);
  const number2 = getRandomInt(20);

  const iteration = getRandomArbitrary(5, 10);
  const indexElement = getRandomArbitrary(1, iteration);
  for (let i = 0; i <= iteration; i += 1) {
    strArr.push(number);
    number += number2;
  }
  task[1] = strArr[indexElement].toString();

  const result = strArr.join(' ');

  task[0] = result.replace(`${task[1]}`, '..');

  return task;
}

function getQuestion() {
  return 'What number is missing in the progression?';
}

export { getQuestion, getTask };
