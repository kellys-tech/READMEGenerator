const fs=require("fs");
const inquirer=require("inquirer");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// asking user questions
const promptUser = () =>
inquirer.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter description of your project.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Describe how to install your project.',
      },
      {
        type: 'input',
        name: 'uses',
        message: 'Describe how your project should be used.',
      },
      {
        type: 'rawlist',
        name: 'license',
        message: 'What licenses are you applying to your project?',
        choices: ['MIT', 'Apache2.0', 'GNUGeneralPublicLicense', 'MozillaPublicLicense'],
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How can someone contribute to your project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the cases for testing your project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github link.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
      },

]);


const generateREADME = (answers) =>
// function to write README file
`# ${answers.title}

### Created by ${answers.name}

[![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)]

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

## Description
  * ${answers.description}
      
## Installation
  * ${answers.install}
      
## Usage
  * ${answers.uses}
      
## License
  * This project is distributed under the license ${answers.license}.

    By submitting a pull request to this project, you agree to license your contribution under the license ${answers.license}.
      
## Contributions
  * ${answers.contribute}
      
## Tests
  * ${answers.test}
     
## Questions
  ### If you have any questions, contact me through github or by email. 
    * Github link: ${answers.github}
    * Email: ${answers.email}`

 
  promptUser()
  .then((answers) => writeFileAsync('output/README.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));