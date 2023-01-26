import { Country } from './interfaces';

const step = 10;

const countries: Country[] = [
  {
    id: 'ru',
    title: 'RUS',
  },
  {
    id: 'de',
    title: 'DE',
  },
  {
    id: 'us',
    title: 'USA',
  },
];

const iconStyle = { fontSize: '1.1em', marginTop: '-3px' };

const cityPrefix = ['г.', 'г.', 'г.', 'город', 'деревня', 'дер.', 'село'];

export { step, countries, iconStyle, cityPrefix };
