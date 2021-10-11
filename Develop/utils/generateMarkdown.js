// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if (data.license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (data.license === "APACHE 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (data.license === "GPL 3.0") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    if (data.license === "BSD 3") {
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "MIT") {
    return "<https://opensource.org/licenses/MIT>"
  }
  if (data.license === "APACHE 2.0") {
    return "<http://www.apache.org/licenses/LICENSE-2.0>"
  }
  if (data.license === "GPL 3.0") {
    return "<https://opensource.org/licenses/GPL-3.0>"
  }
  if (data.license === "BSD 3") {
    return "<https://opensource.org/licenses/BSD-3-Clause>"
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data === "none") {
    return ""
  } else {
    return `${renderLicenseBadge(data)}
    <br>
     ${renderLicenseLink(data)}`
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data)}
  # ${data.title}

  ## Table of Contents
  [Description](#description)
  [Installation](#installationInstructions)
  [Usage](#usageInformation)
  [Contribution Guidelines](#contributionGuidelines)
  [Tests](#tests)
  [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installationInstructions}

  ## Usage
  ${data.usageInformation}

  ## Contributing
  ${data.contributionGuidelines}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(data)}

  ## Questions
  ${data.name}
  ${data.email}
  ${data.github}
`;
}

module.exports = generateMarkdown;