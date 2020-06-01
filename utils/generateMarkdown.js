const generateTile = (title, badges, license) => {
  if (badges === true) {
    return `# ${title} \n[![${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://shields.io/)`;
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

const generateTableOfContents = (data) => {
  let tableOfContents = [];
  Object.entries(data).forEach(([key]) => {
    tableOfContents.push(`- [${key}](#${key})`);
  });
  return `
  ## Table Of Contents
  ${tableOfContents.join("\n")}`;
};

const generateInstallation = (installation) => {
  return `\n## Installation \nTo install all relevant dependencies for this project, run

      ${installation}`;
};

const generateUsage = (usage) => {
  return `## Usage \nTo use this project, 
      ${usage}`;
};

const generateLicence = (licenseBody) => {
  return `## License \n${licenseBody}`;
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

const generateQuestions = (githubProfileUrl, name, email) => {
  return `
  ## Questions

  ![Image of ${name}](${githubProfileUrl}.png "Image of ${name}")
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
  const name = data.name;
  const githubProfileUrl = data.githubProfileUrl;
  const email = data.email;

  // Returns answers from user into README format
  const finalReadme = `
  ${generateTile(title, badges, license)}
  ${generateDescription(description)}
  ${generateTableOfContents(data)}
  ${generateInstallation(installation)}
  ${generateUsage(usage)}
  ${generateLicence(licenseBody)}
  ${generateContributing(contributing)}  
  ${generateTests(tests)}
  ${generateCredits(credits)}
  ${generateQuestions(githubProfileUrl, name, email)}
  `;
  return finalReadme;
}

// Exports module so it can be used within other files
module.exports = generateMarkdown;
