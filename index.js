//require inquirer

//prompt user for manager
//ask for specific info 
//prompt menu for next steps which is intern engineer or quit 
// prompt for intern info 
//prompt for engineer info 
//generate an html with the provided information 

var inquirer = require('inquirer');
const employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const html = require('./lib/generate-html');
const managerArray = []
const employeeArray = []
const internArray = []

//ask user for manager information (name, id, email, office number)
const manager = () => {
    inquirer
        .prompt([ {
            type: 'input',
            name: 'managerName',
            message: 'What is your managers name?'
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is your managers ID?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your managers email?'
        },
        {
            type: 'input',
            name: 'OfficeNumber',
            message: 'What is the office number?'
        }
            /* Pass your questions in here */

        ])
        .then((answers) => {
            // Use user feedback for whatever
            const managerInfo = new Manager (answers.managerName, answers.managerID, answers.managerEmail, answers.OfficeNumber);
            employeeArray.push(managerInfo);
            

           managerMenu();
            
        })
        // .catch((error) => {
        //     if () {
        //     // Prompt couldn't be rendered in the current environment
        //     } else {

        //     }
        // });
};

const addEngineer = () => {
    inquirer
    .prompt ([{
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineers name?'

 },
{
    type: 'input',
    name: 'engineerID',
    message: 'What is the engineers ID?'
},
{
    type: 'input',
    name: 'engineerEmail',
    message: 'What is the engineers email?'
},
{
    type: 'input',
    name: 'githubUsername',
    message: 'What is the engineers github username?'
}
])
.then((answers) => {
    const engineerInfo = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.githubUsername);
    employeeArray.push(engineerInfo);
    

    managerMenu();
})
};

const addIntern = () => {
    inquirer
    .prompt ([{
        type: 'input',
        name: 'internName',
        message: 'What is the interns name?'
    },
    {
        type: 'input',
        name: 'internID',
        message: 'What is the interns ID?'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the interns email address?'
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What is the name of the interns school?'
    }
])
.then((answers) => {
    const internInfo = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
    employeeArray.push(internInfo);
    

    managerMenu();
})
};

const managerMenu = () => {
    inquirer
    .prompt ([{
        type: 'list', 
        choices: ['Engineer', 'Intern', 'exit'],
        name: 'employeeType',
        message: 'Add a new Engineer or Intern'
    }
    ])
    .then((answers) => {
        if (answers.employeeType === 'Engineer') {
            addEngineer();
        } else if (answers.employeeType === 'Intern') {
            addIntern();
        } else {
            writeToFile(employeeArray)
        }
    })
};
manager();

function writeToFile(data) {
    console.log(data);
   const fileName = './dist/index.html'
    fs.writeFile(fileName, html(data), err => {
        if (err) {
          throw new Error(err);
        }
        console.log("the data");
        console.log(data);
    });
  }

// go to menu

// menu has three options: intern or engineer, finish building team

// if you choose intern you will need to put name, id, email, and school

//go back to menu

// if you choose engineer you will need to put name, id, email, and GitHub username

// go back to menu

// when you finish building the team you will exit application and the HTML will generate



