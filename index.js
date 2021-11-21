// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like for your README file?',
        choices: [
            'MIT', 'Apache'
        ]
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    
    .then((answers)=>{
        const readmeAnswers = generateMarkdown(answers);
        console.log(readmeAnswers)
        writeToFile('./output/README.md', readmeAnswers)

    })
}

// Function call to initialize app
init();
