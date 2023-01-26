import Fakerator from 'fakerator';
import seedRandom, { PRNG } from 'seedrandom';

import { cityPrefix } from './constants';
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

const getId = (seed: string, country: Countries) => {
  const fakerator = createFakerator(seed, country);
  return fakerator.random.hex(8);
};

const getName = (seed: string, country: Countries, seedRandomize: PRNG) => {
  const { names } = createFakerator(seed, country);
  const name = {
    male: `${names.lastNameM()} ${names.firstNameM()}`,
    female: `${names.lastNameF()} ${names.firstNameF()}`,
  };

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

const getCity = (seed: string, country: Countries, seedRandomize: PRNG) => {
  const fakerator = createFakerator(seed, country);
  if (country !== 'ru') return fakerator.address.city();
  return `${getArrayItem(
    seedRandomize,
    cityPrefix
  )} ${fakerator.address.city()}`;
};

const getStreet = (
  seed: string,
  country: Countries,
  city: string,
  seedRandomize: PRNG
) => {
  const fakerator = createFakerator(seed, country);
  if (city.includes('деревня' || 'дер.' || 'село')) {
    return seedRandomize() > 0.7 ? '' : fakerator.address.streetName();
  }
  return fakerator.address.streetName();
};

const getHouse = (seed: string, country: Countries, seedRandomize: PRNG) => {
  const min = 1;
  const max = 999;
  const house = `${Math.round(min - 0.5 + seedRandomize() * (max - min + 1))}`;
  const flatNumber = `${Math.round(
    min - 0.5 + seedRandom(house)() * (max - min + 1)
  )}`;
  const flat = seedRandomize() > 0.5 ? '' : flatNumber;
  if (country !== 'ru') return `${house}${flat ? `-${flat}` : ''}`;
  return `д.${house}${flat ? `, кв.${flat}` : ''}`;
};

const getPhone = (seed: string, country: Countries) => {
  const fakerator = createFakerator(seed, country);
  const phone = fakerator.phone.number();
  return country === 'ru' ? `+7${phone}` : phone;
};

const getUser = (seed: string, country: Countries): User => {
  const seedRandomize = seedRandom(seed);
  const city = getCity(seed, country, seedRandomize);
  const street = getStreet(seed, country, city, seedRandomize);
  const house = getHouse(seed, country, seedRandomize);
  const address = `${city}, ${street}, ${house}`;
  return {
    id: getId(seed, country),
    name: getName(seed, country, seedRandomize),
    phone: getPhone(seed, country),
    address,
  };
};

export default getUser;
