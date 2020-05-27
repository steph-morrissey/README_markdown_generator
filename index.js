const inquirer = require("inquirer");
const markdownGenerator = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Give a description for your project?",
    name: "Description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What are the specific instructions for how to use the project?",
    name: "Usage",
  },
  {
    type: "input",
    message:
      "List all the collaborators for this project, if any, and provide GitHub profile links",
    name: "Credits",
  },
  {
    type: "input",
    message: "What license does your project have?",
    name: "License",
  },
];

function writeToFile(fileName, data) {}

function init() {
  const callbackFunction = (data) => {
    console.log(data);
  };

  inquirer.prompt(questions).then(callbackFunction);
}

init();
