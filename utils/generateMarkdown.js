const axios = require("axios");

const generateTile = (title) => `# ${title}`;
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
  
  ${usage}`;
};
const generateLicence = (license) => {
  return `
  ## License

  ${license}`;
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
  const description = data.description;
  const installation = data.installation;
  const usage = data.usage;
  const license = data.license;
  const contributing = data.contributing;
  const tests = data.tests;
  const credits = data.credits;
  const githubProfileUrl = data.githubProfileUrl;
  const email = data.email;

  // Returns answers from user into README format
  const finalReadme = `
  ${generateTile(title)}
  ${generateDescription(description)}
  ${generateInstallation(installation)}
  ${generateUsage(usage)}
  ${generateLicence(license)}
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
