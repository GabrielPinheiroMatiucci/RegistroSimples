import { useState } from 'react';
import { Header, RecordsContainer } from './components';
import './App.css';

function App() {
  const [posted, setPosted] = useState(false);
  return (
    <>
      <Header setPosted={ setPosted } posted={ posted } />
      <RecordsContainer posted={ posted } />
    </>
  );
}

export default App;
