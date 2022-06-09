import { useState } from 'react';
import Select from './Select';
import ServidorError from './ServidorError';

function Header({ posted, setPosted }) {
  const now = new Date();

  const [informations, setInformations] = useState({
    day: `${now.getDate()}`,
    month: `${(now.getMonth() + 1)}`,
    year: `${now.getFullYear()}`,
    fullName: '',
  });
  const [invalidFullName, setInvalidFullName] = useState(false);
  const [serverError, setServerError] = useState(false);

  function handleChange({ target: { name, value } }) {
    const oldInformations = informations;
    setInformations({ ...oldInformations, [name]: value })
  }

  function validateFullName() {
    const { fullName } = informations;

    if (fullName.trim() === '') {
      setInvalidFullName(true);
    } else {
      setInvalidFullName(false);
      handleClick();
    }
  }

  function createdResponse() {
    setPosted(!posted);
    setInformations({
      day: `${now.getDate()}`,
      month: `${(now.getMonth() + 1)}`,
      year: `${now.getFullYear()}`,
      fullName: '',
    });
  }

  async function handleClick() {
    const { day, month, year, fullName } = informations;
    const date = `${year}-${month}-${day}`;
    const payload = JSON.stringify({ name: fullName, date });

    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    try {
      const response = await fetch(
        'http://127.0.0.1:3001/registros',
        { method: 'POST', body: payload, headers: myHeaders },
      );
      setServerError(false);
      if (response.status === 201) {
        createdResponse();
      }
    } catch (error) {
      console.error(error);
      setServerError(true);
    }
  }

  return (
    <header className="header">
      <h2>Inserir novo Registro</h2>
      { invalidFullName && <h2>Nome inválido</h2> }
      { serverError && <ServidorError /> }
      <nav className="navbar">
        <label htmlFor="fullName" className="margin-right">
          Nome:&nbsp;
          <input type="text" name="fullName" onChange={ handleChange } />
        </label>
        <p>Data de nascimento:&nbsp;&nbsp;</p>
        <Select
          name="day"
          value={ informations.day }
          handleChange={ handleChange }
          initial={ 1 }
          limit={ 31 }
        />
        <Select
          name="month"
          value={ informations.month }
          handleChange={ handleChange }
          initial={ 1 }
          limit={ 12 }
        />
        <Select
          name="year"
          value={ informations.year }
          handleChange={ handleChange }
          initial={ ((now.getFullYear()) - 100) }
          limit={ now.getFullYear() }
        />
        <button type="button" onClick={ validateFullName }>
          Adicionar
        </button>
      </nav>
    </header>
  );
}

export default Header;
