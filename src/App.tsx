import React, { useEffect, useState } from 'react';

import Controls from './components/Controls';
import UsersTable from './components/UsersTable';
import getUser from './utils/functions';
import { User } from './utils/interfaces';
import { Countries } from './utils/types';

function App() {
  const [country, setCountry] = useState<Countries>('ru');
  const [seed, setSeed] = useState('0');
  const [mistakes, setMistakes] = useState('0.00');
  const [users, setUsers] = useState<User[]>([]);
  const [userQuantity, setUserQuantity] = useState(20);

  const getUsersList = (start: number, end: number) => {
    for (let i = start; i < end; i++) {
      const currentSeed = seed + i;
      const currentUser = getUser(currentSeed, country);
      setUsers((prev) => [...prev, currentUser]);
    }
  };

  useEffect(() => {
    setUsers([]);
    getUsersList(0, userQuantity);
  }, [seed, country]);

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
      <UsersTable users={users} />
    </>
  );
}

export default App;
