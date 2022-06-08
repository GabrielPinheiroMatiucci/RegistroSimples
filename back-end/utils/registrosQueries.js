const getRegistros = 'SELECT * FROM tb_registros ORDER BY dt_nascimento ASC, cd_registro ASC;';
const createRegistro = 'INSERT INTO tb_registros ' +
  '(nm_pessoa, dt_nascimento) VALUES (?, ?);';

module.exports = {
  getRegistros,
  createRegistro,
};
