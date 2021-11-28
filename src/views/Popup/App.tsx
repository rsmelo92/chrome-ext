import React, { useState } from 'react';

import Button from '../../components/Button';
import Profile from '../../components/Profile';

import './App.css';
import '../../css/index.css';
import '../../css/reset.css';

const API_URL = 'https://randomuser.me/api/';

function App() {
  const [userData, setUserData] = useState();
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isLoadingLinkedIn, setIsLoadingLinkedIn] = useState(false);

  const fetchUser = () => {
    setIsLoadingUser(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(({ results }) => {
        const [user] = results;
        setUserData(user);
        setIsLoadingUser(false);
      });
  }

  return (
    <div className="App">
      <section className="App-section">
        <header className="App-header">
          <Button isLoading={isLoadingUser} size="small" onClick={fetchUser}>Load Random User</Button>
          <Button isLoading={isLoadingLinkedIn} type="secondary" size="small" onClick={() => {}}>Apply to LinkedIn</Button>
        </header>

        <main className="App-main">
          <Profile user={userData} />
        </main>
      </section>
    </div>
  );
}

export default App
