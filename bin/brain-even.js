import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);

const getRandomIntInclusive = (min = 1, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
};

const getAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

let num = getRandomIntInclusive();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let sum = 0;

console.log(`Question: ${num}`);

for (let i = 0; i < 3; i += 1) {
  const answer = readlineSync.question('Your answer: ');

  if ((answer !== 'yes' && num % 2 === 0) || (answer === 'yes' && num % 2 !== 0) || (answer !== 'yes' && answer !== 'no')) {
    if (answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getAnswer(num)}'.\nLet's try again, ${name}`);
      break;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getAnswer(num)}'.\nLet's try again, ${name}`);
      break;
    }
  } else {
    console.log('Correct!');
    num = getRandomIntInclusive();
    console.log(`Question: ${num}`);
    sum += 1;
  }

  // console.log(`Congratulations,`)
}
if (sum === 3) {
  console.log(`Congratulations, ${name}!`);
}
