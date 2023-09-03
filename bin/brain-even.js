import getGame from '../src/index.js';
import { getQuestion, getTask } from '../src/games/even-logic.js';

getGame(getQuestion(), getTask);
