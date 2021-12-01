// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if(license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if(license === 'Mozilla Public 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if(license === 'IBM Public 1.0') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if(license === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if(license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if(license === 'none') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return '<br/> For more information, visit: https://opensource.org/licenses/MIT'
  } else if(license === 'Apache') {
    return '<br/> For more information, visit: https://opensource.org/licenses/Apache-2.0'
  }else if(license === 'Mozilla Public 2.0') {
    return '<br/> For more information, visit: https://opensource.org/licenses/MPL-2.0'
  }else if(license === 'IBM Public 2.0') {
    return '<br/> For more information, visit: https://opensource.org/licenses/IPL-1.0'
  }else if(license === 'GNU GPL v3') {
    return '<br/> For more information, visit: https://opensource.org/licenses/GPL-3.0'
  }else if(license === 'ISC') {
    return '<br/> For more information, visit: https://opensource.org/licenses/ISC'
  }else if(license === 'none') {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return ""
  } else {
    return "License"
  }
}

const generateMarkdown = (data)=>{
  return `# ${data.project}
  ${renderLicenseBadge(data.license)}
  
  ## Description 
  
  ${data.description}
  
  ## Table of Contents
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [Contributing](#contributing)
  ### [Tests](#tests)
  ### [${renderLicenseSection(data.license)}](#${renderLicenseSection(data.license)})
  ### [Questions](#questions)
   
  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}
  
  ## Contributing

  ${data.contribution}
  
  ## Tests

  ${data.test}
  
  ## ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Questions?

  Any questions or concerns, please contact me via the information provided below:

  Github: ${data.username} <br/> https://github.com/${data.username}/
  ![License: Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

  Or

  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
