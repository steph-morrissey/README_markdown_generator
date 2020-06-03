const tableOfContent = [];
// Generates title and license badge if user requests it
const generateTile = (title, license) => {
  return `# ${title} \n[![${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://shields.io/)`;
};

// Generated project description
const generateDescription = (description) => {
  return `
  ## Description
  
  ${description}
  `;
};

// Generates table of contents for the project
const generateTableOfContents = (data) => {
  const tableOfContents = [];

  Object.entries(data).forEach(([key]) => {
    tableOfContents.push(`- [${[key]}](#${[key]}) \n`);
  });
  return `
  ## Table of Contents \n\n${tableOfContents.slice(3, 9).join("")}`;
};

// Generates installation instructions based on users input
const generateInstallation = (installation) => {
  return `\n## Installation \nTo install all relevant dependencies for this project, run

      ${installation}`;
};

// Generates usage instructions based on users inputs
const generateUsage = (usage) => {
  return `## Usage \nTo use this project, 
      
      ${usage}`;
};

// Provides license outline based on license chosen by user
const generateLicence = (licenseBody) => {
  return `## License \n${licenseBody}`;
};

// Generates contribution outline if user confirms it
const generateContributing = (contributing) => {
  return `
  ## Contributing
  
  When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

  1. Fork
  2. Clone and setup 
         git clone ${contributing}
  3. Develop
  4. Pull request
`;
};

// Generates users tests based on descriptions given by user
const generateTests = (tests) => {
  const testsArray = tests.split(", ");
  return `## Tests\n${testsArray.join("\n\n")}`;
};

// Generates users full name and email from
const generateCredits = (name, githubHtmlUrl) => {
  return `
  ## Credits
  
  ${name} - <${githubHtmlUrl}>`;
};

const generateQuestions = (githubAvatarUrl, name, email, questions) => {
  return `
  ## Questions

  ![Image of ${name}](${githubAvatarUrl}.png "Image of ${name}")
  - ${email}
  
  ${questions}`;
};

function generateMarkdown(data) {
  // Declared variables for markdown sections
  const title = data.title;
  const description = data.description;
  const installation = data.installation;
  const usage = data.usage;
  const license = data.license;
  const licenseBody = data.licenseBody;
  const contributing = data.contributing;
  const tests = data.tests;
  const name = data.name;
  const githubAvatarUrl = data.githubAvatarUrl;
  const githubHtmlUrl = data.githubHtmlUrl;
  const email = data.email;
  const questions = data.questions;

  // Returns answers from user into README format
  const finalReadme = `
  ${generateTile(title, license)}
  ${generateDescription(description)}
  ${generateTableOfContents(data)}
  ${generateInstallation(installation)}
  ${generateUsage(usage)}
  ${generateLicence(licenseBody)}
  ${generateContributing(contributing)} 
  ${generateTests(tests)}
  ${generateCredits(name, githubHtmlUrl)}
  ${generateQuestions(githubAvatarUrl, name, email, questions)}
  `;
  return finalReadme;
}

// Exports module so it can be used within other files
module.exports = generateMarkdown;
