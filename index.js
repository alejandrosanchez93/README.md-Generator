const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require("chalk");
const generate = require("./generateMarkdown");
const generateMarkdown = require('./generateMarkdown');

const questions = [ 
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter list of instructions for installation',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Choose a license',
        choices: ['MIT', 'APACHE2.0', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter contributor information',
        name: 'contributor'
    },
    {
        type: 'input',
        message: 'Provide tests for the project',
        name: 'test'   
    },
    {
        type: 'input',
        message: 'What is your GitHub profile link',
        name: 'profile'
    },
    {
        type: 'input',
        message: 'Enter link to your repository',
        name: 'repository'

    }

];

inquirer.prompt(questions)
.then(data => {
    fs.writeFile('README.md', generateMarkdown, err => {
        if (err) {
            throw err;
        };
        console.log("success!");
    });
});

