import React from 'react';

import { SetState } from '../utils/types';
import CountrySelector from './CountrySelector';
import SeedInput from './SeedInput';

interface ControlsProps {
  country: string;
  setCountry: SetState<string>;
  seed: string;
  setSeed: SetState<string>;
}

function Controls({ country, setCountry, seed, setSeed }: ControlsProps) {
  return (
    <div className="d-flex flex-column align-items-end">
      <h1 className="text-primary">Fake User Data</h1>
      <CountrySelector country={country} setCountry={setCountry} />
      <SeedInput seed={seed} setSeed={setSeed} />
    </div>
  );
}

export default Controls;
