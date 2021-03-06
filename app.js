// generate a webpage that displays teams basic info
// start by asking team manager prompts
// then ask about team members - either an engineer or an intern
// if engineer, ask for Role; if intern, ask for school
// after each team member creation, ask if team is been complete
// if true, create html file; if false, repeat team prompts

// The app must generate a team.html page in the output directory, that displays a nicely formatted team roster.
// Each team member should display the following in no particular order:
// Name
// ID
// Email
// Specific property (Office Number, Role, GitHub, School)

/******/

// install node/npm
// install jest for test classes

// call inquirer for user prompts
const inquirer = require('inquirer');
// call fs for file creation
const fs = require('fs');

// call all js files in lib folder
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const renderTeam = require('./lib/renderTeam');

// array to populate with team members
const team = [];

// function for manager prompts - also call team function
const managerInfo = function () {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Ready to store your teams information?',
            name: 'start',
            default: true
        },
        {
            type: 'input',
            message: 'Lets start with the manager! What is your name?',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'Enter your ID:',
            name: 'managerId'
        },
        {
            type: 'input',
            message: 'Enter your email:',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'Enter your office number:',
            name: 'officeNumber'
        }
    ])
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
            team.push(manager);

            buildTeam();
        });
};

// function to create team or stop team generation and create html fil
var buildTeam = function () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select a team member:',
            choices: [
                'Engineer',
                'Intern',
                'Team is complete'
            ],
            name: 'team',
        }
    ])
        .then(response => {
            console.log(team);

            if (response.team === 'Engineer') {
                engineerInfo();
            }
            else if (response.team === 'Intern') {
                internInfo();
            }
            else {
                createTeam();
            }
        });
};

// function for engineer info
var engineerInfo = function () {
    console.log("engineer");
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter engineers name:',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'Enter engineers ID:',
            name: 'engineerId'
        },
        {
            type: 'input',
            message: 'Enter engineers email:',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'Enter engineers GitHub username:',
            name: 'engineerGitHub'
        }
    ])
        .then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub);
            team.push(engineer);

            buildTeam();
        });
};

// function for intern info
var internInfo = function () {
    console.log("intern");
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter interns name:',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'Enter interns ID:',
            name: 'internId'
        },
        {
            type: 'input',
            message: 'Enter interns email:',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'Enter interns school:',
            name: 'internSchool'
        }
    ])
        .then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            team.push(intern);

            buildTeam();
        });
};

// function to create html file when team is complete
var createTeam = function () {
    fs.writeFile(
        __dirname + '/output/team.html', renderTeam(team),
        function(err){
            if(err){
                return console.error(err);
            }
            console.log("team page has been created");
        }
    );
};

managerInfo();
