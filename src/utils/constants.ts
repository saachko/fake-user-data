import { Country, TableHeading } from './interfaces';

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

const tableHeadings: TableHeading[] = [
  {
    id: '1',
    headingName: '#',
  },
  {
    id: '2',
    headingName: 'id',
  },
  {
    id: '3',
    headingName: 'Full name',
  },
  {
    id: '4',
    headingName: 'Address',
  },
  {
    id: '5',
    headingName: 'Phone number',
  },
];

export { step, countries, iconStyle, cityPrefix, tableHeadings };
