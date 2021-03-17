DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NULL,
    salary DECIMAL(5,2) NULL,
    department_id INT NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL
);

