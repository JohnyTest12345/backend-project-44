import readlineSync from 'readline-sync';

export default function getGame(question, task) {
  let taski = task();

  let sum = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${taski[0]}`);
    const answer = readlineSync.question('Your answer: ');

    if (taski[1] === answer) {
      console.log('Correct!');
      taski = task();
      sum += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${taski[1]}'. \nLet's try again, ${name}`);
      break;
    }
  }

  if (sum === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}


