const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

// array of questions for user
const questions = [{
  type: "input",
  name: "username",
  message: "What is your GitHub user name?",
},
{
  type: "input",
  name: "title",
  message: "What is your project title?",
},
{
  type: "input",
  name: "description",
  message: "What is your project description?",
},
{
  type: "input",
  name: "toc",
  message: "Enter Table of Contents to make it easier for users to find what they need",
},
{
  type: "input",
  name: "installation",
  message: "What steps are required to install your project? Please provide instructions to setup development environment.",
},
{
  type: "input",
  name: "usage",
  message: "Provide instructions and examples for use. Include screenshots as needed.",
},
{
  type: "input",
  name: "contribute",
  message: "List collaborators and link their GitHub profiles, third-party assets, and any tutorials used.",
},
{
  type: "input",
  name: "tests",
  message: "List any tests written and examples on how to run them.",
},
{
  type: "input",
  name: "license",
  message: "List any licenses' your project may include. Choices include ISC, MIT, Apache License 2.0, GNU GPLv2, GNU GPLv3",
},
]

// function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, "utf-8", function (err) {
    if (err) throw err;
    console.log("success!")
  });

  // function to initialize program
  function init() {
    inquirer.prompt(questions).then(function (data) {
      let readme = generateMarkdown(data);
      const fileName = "README.md";
      return writeToFile(fileName, readme)

    })
  }
  // function call to initialize program
  init();

}
