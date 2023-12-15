// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Whats the title you want to go with?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Briefly describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How can I install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How will you use this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Can others contribute to this project? If so, how?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How can I test your project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please choose a license for your project.',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    })
}

// Function call to initialize app
init();