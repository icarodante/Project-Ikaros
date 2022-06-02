create database ikaros;
create table usuario(
id int primary key auto_increment,
nome varchar (45),
sobrenome varchar (45),
email varchar(50),
senha varchar(19));

create table post(
nome varchar(45) primary key);

create table curtidas(
id int auto_increment primary key,
fkuser int,
fkpost varchar(45));


select count(id) from curtidas where fkpost = "postNautopia";