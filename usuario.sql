CREATE TABLE IF NOT EXISTS usuario (
id varchar(255) NOT NULL AUTO_INCREMENT,
nome varchar(80) NOT NULL,
email varchar(255) NOT NULL,
sexo varchar(1) NOT NULL,
nascimento date NOT NULL,
senha varchar(32) NOT NULL,
PRIMARY KEY ('id_usuario')
) ENGINE=InnoDB DEFAULT CHARSET=utf-8 AUTO_INCREMENT=2 ;