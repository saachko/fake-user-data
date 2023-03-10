import { Country, TableHeading } from './interfaces';
import { UserKeys } from './types';

const startUserQuantity = 20;

const pageStep = 10;

const userRepeatStep = 10000000;

const countries: Country[] = [
  {
    id: 'ru',
    title: 'RUS',
    uniqueKey: '1',
  },
  {
    id: 'de',
    title: 'DE',
    uniqueKey: '2',
  },
  {
    id: 'us',
    title: 'USA',
    uniqueKey: '3',
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

const csvHeadings = [
  { label: 'id', key: 'id' },
  { label: 'Full name', key: 'name' },
  { label: 'Address', key: 'address' },
  { label: 'Phone number', key: 'phone' },
];

const userMistakeKeys: UserKeys[] = ['name', 'address', 'phone'];

export {
  startUserQuantity,
  pageStep,
  userRepeatStep,
  countries,
  iconStyle,
  cityPrefix,
  tableHeadings,
  csvHeadings,
  userMistakeKeys,
};
