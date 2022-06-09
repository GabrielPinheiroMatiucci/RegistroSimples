function validateDateFormat({ year, month, day }) {
  if (year.length !== 4) return null;

  if (month.length !== 2 && month.length !== 1) return null;

  if (day.length !== 2 && day.length !== 1) return null;

  return true;
}

function validateDate(date) {
  const [year, month, day] = date.split('-', 3);

  if (year === undefined || year.trim() === '') return null;

  if (month === undefined || month.trim() === '') return null;

  if (day === undefined || day.trim() === '') return null;

  return validateDateFormat({ year, month, day });
}

module.exports = ({ name, date }) => {
  if (name === undefined || date === undefined) return null;

  if (name.trim() === '' || date.trim() === '') return null;

  if (validateDate(date) === null) return null;

  return true;
};
