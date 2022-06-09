import { useState, useEffect } from 'react';
import Loading from './Loading';
import Record from './Record';
import ServidorError from './ServidorError';

function RecordsContainer({ posted }) {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => { fetchRecords() }, []);

  useEffect(() => { fetchRecords() }, [posted]);

  async function fetchRecords() {
    try {
      const response = await fetch('http://127.0.0.1:3001/registros');
      if (response.status === 200) {
        const json = await response.json();
  
        setErr(false);
        setRecords(json);
        setLoading(false);
      }        
    } catch (error) {
      setErr(true);
      setLoading(true);
      console.error(error);
    }
  }

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
        { loading && !err && <Loading /> }
        { !loading && !err && renderRecords() }
        { err && <ServidorError /> }
      </section>
    </main>
  );
}

export default RecordsContainer;
