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
      ### 1.[Description](#description)
      ### 2.[Installation](#installation)
      ### 3.[Usage](#usage)
      ### 4.[License](#license)
      ### 5.[Contributions](#contributions)
      ### 6.[Tests](#tests)
      ### 7.[Questions][#questions]


      ## Description <a name="description"></a>
      * ${answers.description}
      
      ## Intallation <a name="installation"></a>
      * ${answers.install}
      
      ## Usage <a name="usage"></a>
      * ${answers.uses}
      
      ## License <a name="license"></a>
      * ${answers.license}
      
      ## Contributions <a name="contributions"></a>
      * ${answers.contribute}
      
      ## Tests <a name="tests"></a>
      * ${answers.test}
     
      ## Have Questions? <a name="questions"></a>
      * Github link: ${answers.github}
      * Email: ${answers.email}`

 
  promptUser()
  .then((answers) => writeFileAsync('readme.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to readme.md'))
  .catch((err) => console.error(err));
