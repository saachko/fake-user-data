import React, { useEffect, useState } from 'react';

import Controls from './components/Controls';
import UsersTable from './components/UsersTable';
import { pageStep, startUserQuantity } from './utils/constants';
import { getUser } from './utils/functions/generateUsers';
import makeMistake from './utils/functions/makeMistakes';
import { User } from './utils/interfaces';
import { Countries } from './utils/types';

function App() {
  const [country, setCountry] = useState<Countries>('ru');
  const [seed, setSeed] = useState('0');
  const [mistakes, setMistakes] = useState('0.00');
  const [users, setUsers] = useState<User[]>([]);

  const getUsersList = (start: number, end: number) => {
    for (let i = start; i < end; i++) {
      const currentSeed = seed + i;
      const currentUser = getUser(currentSeed, country);
      const newUser = makeMistake(currentUser, mistakes, currentSeed, country);
      setUsers((prev) => [...prev, newUser]);
    }
  };

  useEffect(() => {
    setUsers([]);
    getUsersList(0, startUserQuantity);
  }, [seed, country, mistakes]);

  const loadNewUsers = () => {
    const isAtBottom =
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop <=
      document.documentElement.clientHeight;

    if (isAtBottom) {
      getUsersList(users.length, users.length + pageStep);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', loadNewUsers);
    return () => {
      window.removeEventListener('scroll', loadNewUsers);
    };
  }, [users]);

  return (
    <>
      <Controls
        country={country}
        setCountry={setCountry}
        seed={seed}
        setSeed={setSeed}
        mistakes={mistakes}
        setMistakes={setMistakes}
        users={users}
      />
      <UsersTable users={users} />
    </>
  );
}

export default App;
