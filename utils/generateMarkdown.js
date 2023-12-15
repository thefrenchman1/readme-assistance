// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
        This project is licensed under the ${license} license.`;
    }
    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#Installation)
  
  * [Usage](#Usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  
  ## Installation
  To install it for yourself, do this: 
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage 
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contribution 
  
  ${data.contribution}
  
  ## Tests 
  
  To test it out, do this: 
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  
  ## Questions 
  
  Have some questions? Send me an email at ${data.email}. Find more of my projects at [${data.github}](https://github.com/${data.github}/).
  
  Happy Coding! 
  
  `;
  }
  
module.exports = generateMarkdown;