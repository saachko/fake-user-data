import React from 'react';

import { SetState } from '../utils/types';
import CountrySelector from './CountrySelector';

interface ControlsProps {
  country: string;
  setCountry: SetState<string>;
}

function Controls({ country, setCountry }: ControlsProps) {
  return (
    <div className="d-flex flex-column align-items-end">
      <h1 className="text-primary">Fake User Data</h1>
      <CountrySelector country={country} setCountry={setCountry} />
    </div>
  );
}

export default Controls;
