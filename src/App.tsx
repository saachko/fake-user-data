import React, { useEffect, useState } from 'react';

import Controls from './components/Controls';
import UsersTable from './components/UsersTable';
import { getName } from './utils/functions';
import { Countries } from './utils/types';

function App() {
  const [country, setCountry] = useState<Countries>('ru');
  const [seed, setSeed] = useState('0');
  const [mistakes, setMistakes] = useState('0.00');
  const [userQuantity, setUserQuantity] = useState(20);

  useEffect(() => {
    console.log(getName(seed, country));
  }, [country, seed]);

  return (
    <>
      <Controls
        country={country}
        setCountry={setCountry}
        seed={seed}
        setSeed={setSeed}
        mistakes={mistakes}
        setMistakes={setMistakes}
      />
      <UsersTable />
    </>
  );
}

export default App;
