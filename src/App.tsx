import React, { useState } from 'react';

import Controls from './components/Controls';
import UsersTable from './components/UsersTable';

function App() {
  const [country, setCountry] = useState('ru');

  return (
    <>
      <Controls country={country} setCountry={setCountry} />
      <UsersTable />
    </>
  );
}

export default App;
