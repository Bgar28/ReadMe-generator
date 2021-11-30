// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if(license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if(license == 'Mozilla Public 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if(license == 'IBM Public 1.0') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if(license == 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if(license == 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

const generateMarkdown = (data)=>{

  return `# ${data.project}
  ${renderLicenseBadge(data.license)}
  
  ## Description 

  *Brief explanation of how the project works:*
  
  ${data.description}
  
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  
  
  ## Installation

  ${data.install}

  
  ## Usage

  ${data.usage}
  
  ## Contributing

  ${data.contribution}
  
  ## Tests

  ${data.test}
  
  ## License
  
  ${data.license}

  ## Questions?

  For any questions or concerns, please contact me via the information provided below:

  Github: ${data.username} 
  https://github.com/${data.username}/


  Or

  Email: ${data.email}
  
  





  `;
}

module.exports = generateMarkdown;
