// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('userName', 'githubName'));

const fs = require("fs");
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
inquirer
  .prompt([
    {
        type: 'input',
        name: 'userName',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is the name of your application repository?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: '.description',
    },
    {
        type: 'input',
        name: '.installationInstructions',
        message: 'Enter your project installation instructions',
    },
    {
        type: 'input',
        name: '.usageInformation',
        message: 'Enter your project usage information',
    },
    {
        type: 'input',
        name: '.contributionGuidelines',
        message: 'Enter your project contribution guidelines',
    },
    {
        type: 'input',
        name: '.Tests',
        message: 'Enter Test for your project'
    },

  ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   })
// ];

.then(function(data) {
    const filename =
      data.title
        .toLowerCase()
        .split(' ')
        .join('') + '.json';

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      if (err) {
        return console.log(err);
      }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();