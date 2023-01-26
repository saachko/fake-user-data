import React, { useState } from 'react';

import Controls from './components/Controls';
import UsersTable from './components/UsersTable';

function App() {
  const [country, setCountry] = useState('ru');
  const [seed, setSeed] = useState('0');
  const [mistakes, setMistakes] = useState('0.00');

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
