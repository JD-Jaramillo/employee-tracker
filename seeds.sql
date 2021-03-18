USE employee_trackerDB;

-- Inserting into department table
INSERT INTO department(name)
VALUES ('HR');
INSERT INTO department(name)
VALUES ('Finance');
INSERT INTO department(name)
VALUES ('Marketing');
INSERT INTO department(name)
VALUES ('Sales');
INSERT INTO department(name)
VALUES ('Engineering');
INSERT INTO department(name)
VALUES ('Accounting');

INSERT INTO role(title, salary, department_id)
VALUES ('HR Manager', 50000, 1);
INSERT INTO role(title, salary, department_id)
VALUES ('Finance Manager', 80000, 1);
INSERT INTO role(title, salary, department_id)
VALUES ('Marketing Manager', 75000, 1);
INSERT INTO role(title, salary, department_id)
VALUES ('Sales Manager', 90000, 1);
INSERT INTO role(title, salary, department_id)
VALUES ('Director of Engineering', 120000, 1);
INSERT INTO role(title, salary, department_id)
VALUES ('Comptroller', 110000, 1);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ('Mike', 'Edwards', 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Stephen', 'Wolf', 3, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Ryan', 'Priv', 2, 2);
INSERT INTO employee(first_name, last_name, role_id)
VALUES ('Mike', 'Edwards', 5);