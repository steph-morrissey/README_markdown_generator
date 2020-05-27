function generateMarkdown(data) {
  // Returns answers from user in README format
  return `

# ${data.title}

### ${data.description}

# Installation 

${data.installation}

# Usage

${data.usage}

# Credits 

${data.credits}

# License

${data.license}

`;
}

// Exports module so it can be used within other files
module.exports = generateMarkdown;
