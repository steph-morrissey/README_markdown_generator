const axios = require("axios");

const generateTile = (title, badges, license) => {
  if (badges === true) {
    return `# ${title} 
    [![${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://shields.io/)`;
  } else {
    return `# ${title}`;
  }
};
const generateDescription = (description) => {
  return `
  ## Description
  
  ${description}
  `;
};

const generateInstallation = (installation) => {
  return ` 
  ## Installation
  
  To install all relevant dependencies for this project, run

      ${installation}
  `;
};

const generateUsage = (usage) => {
  return `
  ## Usage

  To use this project, 
  
      ${usage}

  `;
};
const generateLicence = (licenseBody) => {
  return `
  ## License

  ${licenseBody}`;
};
const generateContributing = (contributing) => {
  return `
  ## Contributing 
  
  ${contributing}`;
};
const generateTests = (tests) => {
  return `
  ## Tests
  
  ${tests}`;
};
const generateCredits = (credits) => {
  return `
  ## Credits
  
  ${credits}`;
};

const generateQuestions = (githubProfileUrl, email) => {
  return `
  ## Questions

  ![Image of ](${githubProfileUrl})
  - ${email}`;
};

function generateMarkdown(data) {
  // Declared variables for markdown sections
  const title = data.title;
  const badges = data.badges;
  const description = data.description;
  const installation = data.installation;
  const usage = data.usage;
  const license = data.license;
  const licenseBody = data.licenseBody;
  const contributing = data.contributing;
  const tests = data.tests;
  const credits = data.credits;
  const githubProfileUrl = data.githubProfileUrl;
  const email = data.email;

  // Returns answers from user into README format
  const finalReadme = `
  ${generateTile(title, badges, license)}
  ${generateDescription(description)}
  ${generateInstallation(installation)}
  ${generateUsage(usage)}
  ${generateLicence(licenseBody)}
  ${generateContributing(contributing)}  
  ${generateTests(tests)}
  ${generateCredits(credits)}
  ${generateQuestions(githubProfileUrl, email)}
  `;
  console.log(finalReadme);
  return finalReadme;
}

// Exports module so it can be used within other files
module.exports = generateMarkdown;
