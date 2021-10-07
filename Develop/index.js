// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require('inquirer');
const path= require("path");
const markdown= require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questionsArray = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => confirmAbout
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your title!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.  (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your project description!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Enter your project installation instructions. (Required)',
        validate: installationInstructionsInput => {
          if (installationInstructionsInput) {
            return true;
          } else {
            console.log('Please enter your installation Instructions!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Enter your project usage information. (Required)',
        validate: usageInformationInput => {
          if (usageInformationInput) {
            return true;
          } else {
            console.log('Please enter your Usage Information!');
            return false;
          }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like other developers to contribute to the project?',
        default: false
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Enter your project contribution guidelines. (Required)',
        validate: contributionGuidelinesInput => {
          if (contributionGuidelinesInput) {
            return true;
          } else {
            console.log('Please enter your Contribution Guidelines!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter Test for your project'
    },
    {
        type: 'list',
        name: 'license',
        message:'What license would you like to use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    }
])}
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questionsArray).then((responses)=>{
        writeToFile("newProjectREADME.md",markdown({...responses}))
    })
}

// Function call to initialize app
init()