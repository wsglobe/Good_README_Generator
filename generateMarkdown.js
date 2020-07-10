// function to generate markdown for README
let index = require('./index.js');

function generateMarkdown(data) {
  console.log(data);
  return `
  <a href="https://github.com/${data.username}"><img src="https://img.shields.io/badge/Github%20page-${data.username}-1abc9c.svg" alt="User's github profile"></a>
![alt text](https://github.com/${data.username}.png)
  # Username:
  ${data.username}
  # Title:
  ${data.title}
  # Description:
  ${data.description}
  # Table of Contents;
  ${data.toc}
  # Installation:
  ${data.installation}
  # Usage:
  ${data.usage}
  # License:
  ${data.license}
  # Contribute:
  ${data.contribute}
  # Tests:
  ${data.tests}
  # Questions:
  ${data.questions}
`;
}

module.exports = generateMarkdown;
