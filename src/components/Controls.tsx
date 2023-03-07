import React from 'react';

import { User } from '../utils/interfaces';
import { Countries, SetState } from '../utils/types';
import CountrySelector from './CountrySelector';
import CsvButton from './CsvButton';
import MistakesInput from './MistakesInput';
import SeedInput from './SeedInput';

interface ControlsProps {
  country: string;
  setCountry: SetState<Countries>;
  seed: string;
  setSeed: SetState<string>;
  mistakes: string;
  setMistakes: SetState<string>;
  users: User[];
}

function Controls({
  country,
  setCountry,
  seed,
  setSeed,
  mistakes,
  setMistakes,
  users,
}: ControlsProps) {
  return (
    <div className="d-flex flex-column align-items-end">
      <h1 className="text-primary">Fake User Data</h1>
      <CountrySelector country={country} setCountry={setCountry} />
      <MistakesInput mistakes={mistakes} setMistakes={setMistakes} />
      <SeedInput seed={seed} setSeed={setSeed} />
      <CsvButton users={users} />
    </div>
  );
}

export default Controls;
