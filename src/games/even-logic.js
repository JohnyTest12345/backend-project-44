
const getRandomInt = (max) => Math.floor(Math.random() * max);

function getTask() {
  const task = [];
  const number = getRandomInt(100);
  task[0] = number;
  if (number % 2 === 0) {
    task[1] = 'yes';
  } else {
    task[1] = 'no';
  }

  return task;
}

function getQuestion() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

export { getQuestion, getTask };
