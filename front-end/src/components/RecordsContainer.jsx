import { useState, useEffect } from 'react';
import Loading from './Loading';

function RecordsContainer() {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchRecords() {
      const response = await fetch('http://127.0.0.1:3001/registros');
      const json = await response.json();

      setRecords(json);
      setLoading(!loading);
    }

    fetchRecords();
  }, []);

  function renderRecords() {
    return (
      <>
        { records.map(( { nm_pessoa: fullName, dt_nascimento: fullDate } ) => {
          const originalDate = fullDate.split('T')[0];
          const splitted = originalDate.split('-');
          const birthDate = `${splitted[2]}/${splitted[1]}/${splitted[0]}`;

          return (
            <section>
              <p>Nome: { fullName } </p>
              <p>Data de nascimento: { birthDate } </p>
            </section>
          );
        }) }
      </>
    );
  }

  return (
    <main className="main">
      <h2>Registros</h2>
      { loading && <Loading /> }
      { !loading && renderRecords() }
    </main>
  );
}

export default RecordsContainer;
