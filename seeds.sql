USE employee_trackerDB;

-- Inserting into department table
INSERT INTO department(name)
VALUES ('HR');
INSERT INTO department(name)
VALUES ('Finance');

-- Inserting into role table  
INSERT INTO role(title, salary)
VALUES ('HR Manager', 50);
INSERT INTO role(title, salary)
VALUES ('CFO', 95);

-- Inserting into employee table 
INSERT INTO employee(first_name, last_name)
VALUES ('Mike', 'Edwards');
INSERT INTO employee(first_name, last_name)
VALUES ('Charles', 'Knightly');