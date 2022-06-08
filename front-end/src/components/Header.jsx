import { useState } from 'react';
import Select from './Select';

function Header() {
  const now = new Date();
  const [payload, setPayload] = useState({
    day: `${now.getDate()}`,
    month: `${(now.getMonth() + 1)}`,
    year: `${now.getFullYear()}`,
    fullName: '',
  });

  function handleChange({ target: { name, value } }) {
    const oldPayload = payload;
    setPayload({ ...oldPayload, [name]: value })
  }

  return (
    <header className="header">
      <h2>Inserir novo Registro</h2>
      <nav className="navbar">
        <label htmlFor="fullName" className="margin-right">
          Nome:&nbsp;
          <input type="text" name="fullName" onChange={ handleChange } />
        </label>
        <p>Data de nascimento:&nbsp;&nbsp;</p>
        <Select
          name="day"
          value={ payload.day }
          handleChange={ handleChange }
          initial={ 1 }
          limit={ 31 }
        />
        <Select
          name="month"
          value={ payload.month }
          handleChange={ handleChange }
          initial={ 1 }
          limit={ 12 }
        />
        <Select
          name="year"
          value={ payload.year }
          handleChange={ handleChange }
          initial={ (Number(payload.year) - 100) }
          limit={ Number(payload.year) }
        />
      </nav>
    </header>
  );
}

export default Header;
