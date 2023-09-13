// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// Create an array of questions for user input
const questions = [];


const generateMd = ({ title, motivation, why, problem, learn,installation,usage, collaborators, license,tests, github, email }) =>
  `# ${title}


  ## Description
  
  -${motivation}
  
  -${why}

  -${problem}
  
  -${learn}
  
  ## Table of contents

  [Installation ](#Installation)
  [Usage ](#Usage)
  [Contributors ](#Contributing)
  [Tests](#Tests)
  [License](#License)
  [Questions ](#Questions)

  ## Installation
  
  ${installation}
  
  
  ## Usage
  
  ${usage}
  
  ## License
  ${license}
  
  
  Copyright (c) [2023] [Anna Newton]
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  ## Contributing
  
 ${collaborators}

  \*I copied license info over from [https://choosealicense.com/](https://choosealicense.com/).
  
  ## Tests
  ${tests}
  
  ## Questions
  Github username 
  [Github link](https://github.com/${github})

  How to reach me:
  [Email me](mailto:${email})
  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'why',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'problem',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'learn',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
      },
      {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What testing do you recommend?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl License', 'apache License', 'Mit License', 'no license']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      
  ])
  .then((answers) => {
    const mdPageContent = generateMd(answers);

    fs.writeFile('README.md', mdPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


//title of my project WHEN I enter my project title 
//THEN this is displayed as the title of the README

//sections entitled Description
//Table of Contents
//Installation
//Usage
//License
//Contributing
//Tests
//Questions

//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README
function init() {}

// Function call to initialize app
init();
