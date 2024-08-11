// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation steps?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
  },
];

// TODO: Create a function to write README file
const fs = require ('fs');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing to file ${fileName}:`, err);
    } else {
      console.log(`Successfully wrote to ${fileName}`);
    }
  });
}

function ReadMeGenerator(answers) {
  return `
# ${answers.projectName}
const { generateReadmeContent } = require('./path/to/file');
## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Features
${answers.features}

## Contributing
${answers.contributing}

## License
${answers.license}
`;
}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions)
    .then(answers => {
      const readmeContent = ReadMeGenerator(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch(error => {
      console.error('An error occurred while initializing the app:', error);
    });}

// Function call to initialize app
init();
        
