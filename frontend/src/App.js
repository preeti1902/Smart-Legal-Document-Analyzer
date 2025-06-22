import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  return loggedIn ? <UploadPage /> : <LoginPage onLogin={() => setLoggedIn(true)} />;
}

export default App;
