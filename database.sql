DROP DATABASE IF EXISTS db_registros;

CREATE DATABASE db_registros;

USE db_registros;

CREATE TABLE tb_registros (
  cd_registro INT AUTO_INCREMENT,
  nm_pessoa VARCHAR(200) NOT NULL,
  dt_nascimento DATE NOT NULL,
  CONSTRAINT pk_registros
    PRIMARY KEY(cd_registro)
);
