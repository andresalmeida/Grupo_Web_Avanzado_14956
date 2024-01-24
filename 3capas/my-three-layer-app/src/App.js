// src/App.js
import React from 'react';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div>
      <Home />
      <UserProfile userId={1} />
    </div>
  );
};

export default App;
