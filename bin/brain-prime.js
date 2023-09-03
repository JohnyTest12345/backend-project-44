#!/usr/bin/env node
import getGame from '../src/index.js';
import { getQuestion, getTask } from '../src/games/prime-logic.js';

getGame(getQuestion(), getTask);
