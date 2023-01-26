import Fakerator from 'fakerator';
import seedRandom, { PRNG } from 'seedrandom';

import fakeData from './fakeData';
import { User } from './interfaces';
import { Countries } from './types';

const createFakerator = (seed: string, country: Countries) => {
  const fakerator = Fakerator(`${country}-${country.toUpperCase()}`);
  // @ts-ignore
  fakerator.seed(Number(seed));
  return fakerator;
};

const getArrayItem = (seedRandomize: PRNG, array: string[]) => {
  const index = Math.floor(seedRandomize() * array.length);
  return array[index];
};

const getId = (seedRandomize: PRNG) => {
  const min = 10000000;
  const max = 99999999;
  return `${Math.round(min - 0.5 + seedRandomize() * (max - min + 1))}`;
};

// eslint-disable-next-line import/prefer-default-export
export const getName = (seed: string, country: Countries) => {
  const { names } = createFakerator(seed, country);
  const name = {
    male: `${names.lastNameM()} ${names.firstNameM()}`,
    female: `${names.lastNameF()} ${names.firstNameF()}`,
  };

  const seedRandomize = seedRandom(seed);
  const gender = seedRandomize() > 0.5 ? 'male' : 'female';
  if (country !== 'ru') {
    return name[gender];
  }

  const russianMiddleName = {
    male: `${getArrayItem(seedRandomize, fakeData.ru.middleName)}ич`,
    female: `${getArrayItem(seedRandomize, fakeData.ru.middleName)}на`,
  };
  return `${name[gender]} ${russianMiddleName[gender]}`;
};
