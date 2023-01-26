import { Countries } from './types';

interface User {
  id: string;
  name: string;
  address: string;
  phone: string;
}

interface Country {
  id: Countries;
  title: string;
}

export type { User, Country };
