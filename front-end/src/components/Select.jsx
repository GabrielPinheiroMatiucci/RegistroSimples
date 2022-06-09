function Select({ name, value, handleChange, initial, limit }) {
  function listNumbers(initial, limit) {
    const numbers = [];

    for (let i = initial; i <= limit; i += 1) {
      numbers.push(i);
    }

    return numbers;
  }

  return (
    <select
      name={ name }
      value={ value }
      onChange={ handleChange }
      className="margin-right"
    >
      { listNumbers(initial, limit).map((number) => {
          return (
            <option
              value={ number }
              key={ `${name}-${number}` }
            >
              { number }
            </option>
          );
        })
      }
    </select>
  );
}

export default Select;
