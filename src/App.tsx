import React, { useState } from 'react';

import Controls from './components/Controls';
import UsersTable from './components/UsersTable';

function App() {
  const [country, setCountry] = useState('ru');
  const [seed, setSeed] = useState('0');

  return (
    <>
      <Controls
        country={country}
        setCountry={setCountry}
        seed={seed}
        setSeed={setSeed}
      />
      <UsersTable />
    </>
  );
}

export default App;
