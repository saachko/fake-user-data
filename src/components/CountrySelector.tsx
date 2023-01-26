import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

import { countries } from '../utils/constants';
import { Countries, SetState } from '../utils/types';

interface CountrySelectorProps {
  country: string;
  setCountry: SetState<Countries>;
}

function CountrySelector({ country, setCountry }: CountrySelectorProps) {
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup aria-label="country group" size="lg">
        {countries.map((item) => (
          <Button
            key={item.id}
            style={{
              backgroundColor: `${country === item.id ? `#0b5ed7` : `#0d6efd`}`,
            }}
            onClick={() => setCountry(item.id)}
          >
            {item.title}
          </Button>
        ))}
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default CountrySelector;
