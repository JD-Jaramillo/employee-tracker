const inquirer = require("inquirer");
const mysql = require('mysql');
require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_trackerDB',
});

const startPrompts = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: "What would you like to do?",
                choices: [
                    'View all Employees',
                    'View all Employees by Department',
                    'View all employees by Manager',
                    'Add employee',
                    'Add department',
                    'Remove Employee',
                    'Update Employee Role',
                    'Update Employee Manager',
                    'View all Roles',
                    'I am done'
                ],
            }
        ])
        .then((answers) => {
            console.log(answers);
            switch (answers.choice) {
                case 'View all Employees': {
                    return viewAllEmployees();
                }
                case 'View all Employees by Department': {
                    return viewAllEmpByDep();
                }
                case 'View all employees by Manager': {
                    return viewAllEmpByManager();
                }
                case 'Add employee': {
                    return addEmployee();
                }
                case 'Add department': {
                    return addDepartment();
                }
                case 'Remove Employee': {
                    return removeEmp();
                }
                case 'Update Employee Role': {
                    return updateEmpRole();
                }
                case 'Update Employee Manager': {
                    return updateEmpManager();
                }
                case 'View all Roles': {
                    return viewAllRoles();
                }
                case 'I am done': {
                    return connection.end();
                }
            }
        })
}


const viewAllEmployees = () => {
    connection.query('SELECT * FROM employee', (err, allEmployees) => {
        if (err) throw err;
        console.table(allEmployees);
        startPrompts();
    })
}

const viewAllEmpByDep = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        startPrompts();
    })
}

const viewAllEmpByManager = () => {
    connection.query('SELECT * FROM `employee` WHERE ?', 'manager_id', (err, empByManager) => {
        if (err) throw err;
        console.table(empByManager);
        startPrompts();
    })
}
const addDepartment = () => {
    connection.query('SELECT * FROM `employee` WHERE ?', 'manager_id', (err, empByManager) => {
        if (err) throw err;
        console.table(empByManager);
        startPrompts();
    })
}

const addEmployee = () => {
    inquirer
        .prompt([
            {
                name: 'employee_firstname',
                type: 'input',
                message: 'What is the first name of the employee you would like to add?',
            },
            {
                name: 'employee_lastname',
                type: 'input',
                message: 'What is the last name of the employee you would like to add?',

            },
            {
                name: 'employee_role',
                type: 'list',
                message: 'What is the employee\'s role?',
                choices: ['Software Engineer',
                    'Sales Lead',
                    'Financial Analyst',
                    'HR Manager',
                    'Recruiter',
                    'Accountant',
                    'Director of Engineering',
                    'CFO',
                    'CEO',
                    'CTO',
                    'Lawyer'
                ]
            },
            {
                name: 'employee_manager',
                type: 'list',
                message: 'Who is the employee\'s manager?',
                choices: ['Ryan Spunik',
                    'Bryan Wolverton',
                    'Adam Wolf',
                    'Stephen Midway',
                    'Jeremy Hyatt',
                    'Mike Edwards',
                    'Rich Rodriguez',
                    'Javier Gutierrez'
                ]
            },
        ]).then((answer) => {
            console.log('Inserting a new employee\n');
            const query = connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: `${answer.employee_firstname}`,
                    last_name: `${answer.employee_lastname}`,
                    // role_id: `${answer.employee_role}`,
                    // manager_id: `${answer.employee_manager}`,
                },
                (err, res) => {
                    if (err) throw err;
                    console.log(`${res.affectedRows} employee added!\n`);
                    startPrompts();
                }
            );
        })
}

const removeEmp = () => {
    connection.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        console.table(res);
        startPrompts();
    })
}

const updateEmpRole = () => {
    connection.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        console.table(res);
        startPrompts();
    })
}

const updateEmpManager = () => {
    connection.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        console.table(res);
        startPrompts();
    })
}
const viewAllRoles = () => {
    connection.query('SELECT title FROM role', (err, showAllRoles) => {
        if (err) throw err;
        console.table(showAllRoles);
        startPrompts();
    })
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    startPrompts();
});