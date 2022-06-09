function Record({ fullName, fullDate }) {
  const originalDate = fullDate.split('T')[0];
  const splitted = originalDate.split('-');
  const birthDate = `${splitted[2]}/${splitted[1]}/${splitted[0]}`;

  return (
    <div className="record-div">
      <p>Nome: { fullName } </p>
      <p>Data de nascimento: { birthDate } </p>
    </div>
  );
}

export default Record;
