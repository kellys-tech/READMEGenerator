const questions=require("inquirer");
const fs=require("fs");
const inquirer=require("inquirer");
const util = require('util');
var markdown = require( "markdown" ).markdown;

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
        choices: ['MIT License', 'Apache License 2.0', 'GPLv3', 'Creative Commons'],
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
      ## Table of Contents
      ### 1.Description
      ### 2.Installation
      ### 3.Usage
      ### 4.License
      ### 5.Contributions
      ### 6.Tests
      ### 7.Questions


      ## Description
      * ${answers.description}
      
      ## Intallation
      * ${answers.install}
      
      ## Usage
      * ${answers.uses}
      
      ## License
      * ${answers.license}
      
      ## Contributions
      * ${answers.contribute}
      
      ## Tests
      * ${answers.test}
     
      ## Questions
      ### If you have any questions, contact me through github or by email. 
      * Github link: ${answers.github}
      * Email: ${answers.email}`

 
  promptUser()
  .then((answers) => writeFileAsync('readme.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to readme.md'))
  .catch((err) => console.error(err));
