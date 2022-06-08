import { useState, useEffect } from 'react';
import Loading from './Loading';
import Record from './Record';

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
        { records.map(( { nm_pessoa: fullName, dt_nascimento: fullDate }, index ) => {
          return (
            <Record
              fullName={ fullName }
              fullDate={ fullDate }
              key={ `${fullName}=${fullDate}-${index}`}
            />
          );
        }) }
      </>
    );
  }

  return (
    <main className="records-main">
      <h2>Registros</h2>
      <section className="records-section">
        { loading && <Loading /> }
        { !loading && renderRecords() }
      </section>
    </main>
  );
}

export default RecordsContainer;
