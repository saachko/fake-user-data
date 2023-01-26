import seedRandom, { PRNG } from 'seedrandom';

import { userMistakeKeys } from '../constants';
import fakeData from '../fakeData';
import { User } from '../interfaces';
import { Countries } from '../types';
import { getArrayItem } from './generateUsers';

const chooseWhereMistake = (user: User, seedRandomize: PRNG) => {
  const keyWithMistake =
    userMistakeKeys[Math.floor(seedRandomize() * userMistakeKeys.length)];
  const valueWithMistake = user[keyWithMistake].split('');
  return { keyWithMistake, valueWithMistake };
};

const deleteSymbol = (user: User, seed: string, seedRandomize: PRNG) => {
  const mistake = chooseWhereMistake(user, seedRandomize);
  const letterToDelete = getArrayItem(seedRandomize, mistake.valueWithMistake);
  const letterIndex = mistake.valueWithMistake.indexOf(letterToDelete);
  mistake.valueWithMistake.splice(letterIndex, 1);
  return {
    ...user,
    [mistake.keyWithMistake]: mistake.valueWithMistake.join(''),
  };
};

const addSymbol = (
  user: User,
  seed: string,
  seedRandomize: PRNG,
  country: Countries
) => {
  const mistake = chooseWhereMistake(user, seedRandomize);
  const randomValueIndex = Math.round(
    0 - 0.5 + seedRandomize() * (mistake.valueWithMistake.length - 0 + 1)
  );
  const letters = fakeData[country].letters.split('');
  const randomLetterIndex = Math.round(
    0 - 0.5 + seedRandomize() * (letters.length - 0 + 1)
  );
  mistake.valueWithMistake.splice(
    randomValueIndex,
    0,
    letters[randomLetterIndex]
  );
  return {
    ...user,
    [mistake.keyWithMistake]: mistake.valueWithMistake.join(''),
  };
};

const shiftSymbols = (user: User, seed: string, seedRandomize: PRNG) => {
  const mistake = chooseWhereMistake(user, seedRandomize);
  const wrongValue = mistake.valueWithMistake;
  const randomValueIndex = Math.round(
    0 - 0.5 + seedRandomize() * (wrongValue.length - 0 + 1)
  );
  const helper = wrongValue[randomValueIndex];
  wrongValue[randomValueIndex] = wrongValue[randomValueIndex + 1];
  wrongValue[randomValueIndex + 1] = helper;
  return {
    ...user,
    [mistake.keyWithMistake]: mistake.valueWithMistake.join(''),
  };
};

const makeMistake = (
  user: User,
  mistakes: string,
  seed: string,
  country: Countries
) => {
  const seedRandomize = seedRandom(seed);
  const mistakesNumber = Math.floor(Number(mistakes));
  let wrongUser = user;
  for (let i = 0; i < mistakesNumber; i++) {
    wrongUser = shiftSymbols(wrongUser, seed, seedRandomize);
  }
  return wrongUser;
};

export default makeMistake;
