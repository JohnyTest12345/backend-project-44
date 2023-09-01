const getRandomInt = (max) => Math.floor(Math.random() * max);

function getTask() {
  const task = [];

  const operator = ['+', '-', '*'];
  const endOperator = operator[getRandomInt(3)];
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);

  task[0] = `${number1} ${endOperator} ${number2}`;
  if (endOperator === '+') {
    const num = number1 + number2;
    task[1] = num.toString();
  } else if (endOperator === '-') {
    const num = number1 - number2;
    task[1] = num.toString();
  } else if (endOperator === '*') {
    const num = number1 * number2;
    task[1] = number1 * number2;
    task[1] = num.toString();
  }

  return task;
}

function getQuestion() {
  return 'What is the result of the expression?';
}

export { getQuestion, getTask };
