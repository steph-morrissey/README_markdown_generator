// Declaration of required variables
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "myREADME.md";

// README markdown questions list
const questions = [
  {
    type: "input",
    name: "github_username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a description for your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the specific instructions for how to use the project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Do you want other developers to help contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Are there any tests for this project?",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List all the collaborators for this project, if any, and provide GitHub profile links",
  },
  {
    type: "list",
    name: "license",
    message: "What license is your project using?",
    choices: [
      "mit",
      "lgpl-3.0",
      "mpl-2.0",
      "agpl-3.0",
      "unlicense",
      "isc",
      "apache-2.0",
      "gpl-3.0",
    ],
  },
  {
    type: "confirm",
    name: "badges",
    message: "Would you like to add a badge for this license?",
  },
];

// Transforms answers generated by user into correct README template format and writes to a README.md
function writeToFile(data) {
  // Writes README content to README.md file
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) {
      console.log(err);
      throw "Failed to write the file";
    }
    console.log("The file has been saved!");
  });
}

// Calls inquirer module to ask user relevant README questions,
// then, once all questions have been answered, call the writeToFile function
function init() {
  const processGithubInfo = (data) => {
    const githubUrl = `https://api.github.com/users/${data.github_username}`;
    axios.get(githubUrl).then((response) => {
      data.githubProfileUrl = response.data.avatar_url;
      data.email = response.data.email;
      data.name = response.data.name;
      processLicenseInfo(data);
    });
  };
  const processLicenseInfo = (data) => {
    console.log(data);
    const githubLicense = `https://api.github.com/licenses/${data.license}`;
    axios
      .get(githubLicense)
      .then((response) => {
        data.licenseBody = response.data.body;
      })
      .then(writeToFile(data));
  };
  inquirer.prompt(questions).then(processGithubInfo);
}

init();
