CREATE DATABASE db_registros;

USE db_registros;

CREATE TABLE tb_pessoas (
  cd_pessoa INT,
  nm_pessoa VARCHAR(200) NOT NULL,
  dt_nascimento DATE NOT NULL,
  CONSTRAINT pk_pessoas
    PRIMARY KEY(cd_pessoa)
);
