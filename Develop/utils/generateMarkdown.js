function generateMarkdown(data) {

  return `# ${data.projectTitle}
  
  ![badge](https://img.shields.io/badge/license-${data.license}-orange)<br />

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Test](#tests)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [User Story](#userStory)
  - [Acceptance Criteria](#acceptanceCriteria)
  - [Screenshot](#screenShot)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ##License <br>
  ![badge](https://img.shields.io/badge/license-${data.license}-orange)
  <br />

  This application is covered by the ${data.license} license. 

  ## Contributing
  ${data.contributing}

  ## User Story
  ${data.userStory}

  ## Acceptance Criteria
  ${data.acceptanceCriteria}

  ## Screenshot
  ${data.screenShot}

  ## Questions
  ${data.questions}<br />

  <br />
  :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />

  Email me with any questions: ${data.email}<br /><br />
  
      `;
    }
    
    module.exports = generateMarkdown;