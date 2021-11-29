// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Welcome message
const hello = [
    {
        type: 'confirm',
        name: 'hello',
        message: chalk.blueBright(`Welcome to the README.md generator! Answer the ensuing questions to render your customized README. Lets start! Press 'y' or enter. `)

    }
]

// Success message
const success = chalk.greenBright(`README has been generated! See output folder.`);


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like for your README file?',
        choices: [
            'MIT', 'Apache', 'Mozilla Public 2.0', 'IBM Public 1.0', 'GNU GPL v3', 'ISC'
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(success)
  );
}

// TODO: Create a function to initialize app
const init = async () => {
    try {
        await inquirer.prompt(hello);
        const userData = await inquirer.prompt(questions);
        writeToFile('./output/README.md', generateMarkdown(userData));
    } catch (err) {
        console.log(err);
    }

}

// function init() {
//     inquirer.prompt(questions)
    
//     .then((answers)=>{
//         const readmeAnswers = generateMarkdown(answers);
//         console.log(readmeAnswers)
//         writeToFile('./output/README.md', readmeAnswers)

//     })
// }

// Function call to initialize app
init();
