const getRandomInt = (max) => Math.floor(Math.random() * max);

function getTask() {
  const task = [];

  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const nod1 = [];
  const nod2 = [];

  task[0] = `${number1} ${number2}`;
  for (let i = 1; i <= number1; i += 1) {
    if (number1 % i === 0) {
      nod1.push(i);
    }
  }
  for (let i = 0; i <= number2; i += 1) {
    if (number2 % i === 0) {
      nod2.push(i);
    }
  }

  const intersection = nod1.filter((x) => nod2.includes(x));
  task[1] = Math.max(...intersection).toString();

  return task;
}

function getQuestion() {
  return 'Find the greatest common divisor of given numbers.';
}

export { getQuestion, getTask };
