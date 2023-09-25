create database test;
use test;
create table User (
    id varchar(20), 
    firstName varchar(20), 
    lastName varchar(20), 
    isActive boolean,
    primary key (id)
);
insert into User (id, firstName, lastName, isActive) 
values ('529007', 'Yun', 'Xiaoxi', true);