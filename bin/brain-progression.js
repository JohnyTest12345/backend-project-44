import getGame from '../src/index.js';
import { getQuestion, getTask } from '../src/games/arithmetic-logic.js';

getGame(getQuestion(), getTask);