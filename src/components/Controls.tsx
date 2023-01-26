import React from 'react';

import { SetState } from '../utils/types';
import CountrySelector from './CountrySelector';
import MistakesInput from './MistakesInput';
import SeedInput from './SeedInput';

interface ControlsProps {
  country: string;
  setCountry: SetState<string>;
  seed: string;
  setSeed: SetState<string>;
  mistakes: string;
  setMistakes: SetState<string>;
}

function Controls({
  country,
  setCountry,
  seed,
  setSeed,
  mistakes,
  setMistakes,
}: ControlsProps) {
  return (
    <div className="d-flex flex-column align-items-end">
      <h1 className="text-primary">Fake User Data</h1>
      <CountrySelector country={country} setCountry={setCountry} />
      <MistakesInput mistakes={mistakes} setMistakes={setMistakes} />
      <SeedInput seed={seed} setSeed={setSeed} />
    </div>
  );
}

export default Controls;
