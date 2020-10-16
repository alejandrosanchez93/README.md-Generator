function generateMarkdown(data) {
    return `
![Github license](license-money${data.license}-)
#${data.title}

## Description
${data.description}
---

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licenses](#Licenses)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository](#Repository)
- [GitHub Info](#GitHub)

---

## Installation
${data.install}
---

## Usage
${data.usage}
---

## Contributing
${data.contributor}
---

## Tests
${data.test}
---
## GitHub
GitHub Profile: ${data.profile}
---
## Repository
GitHub Repository: ${data.repository}

  `;
  }
  
  module.exports = { 
    generateMarkdown
  }; 