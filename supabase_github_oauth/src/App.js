import './App.css';
import { useState, useEffect } from 'react';

import { supabase } from './client';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', function() {
      checkUser();
    });
  }, [])
  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: 'github'
    });
  }
  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }
  if (user) {
    return (
      <div className="App">
        <h1>Bienvenido, {user.email}</h1>
        <button onClick={signOut}>Salir</button>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Porfavor ingresa!</h1>
      <button onClick={signInWithGithub}>Ingresar</button>
    </div>
  );
}

export default App;
