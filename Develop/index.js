// TODO: Include packages needed for this application
const inquirer = require ('inquirer'); 
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { clear } = require('console');



// TODO: Create an array of questions for user input

inquirer.prompt ([        
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description for the application: ",
    },
    {
        type: "input",
        name: "installation",
        message: "Instalation Process(if any, write 'none' if there isn't any): ",
    },
    {
        type: "input",
        name: "tests",
        message: "Is there test included?",
    },
    {
        type: "input",
        name: "usage",
        message: "Use for the Application?",
    },
    {
        type: "list",
        name: "license",
        message: "Pick a License agreement: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
            "None",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Any contrubuting partners?",
    },
    {
        type: "input",
        name: "userStory",
        message: "Write out a User Story",
    },
    /*
    {
        type: "input",
        name: "acceptanceCriteria",
        message: "Write out acceptance criteria",
    },
    {
        type: "input",
        name: "screenShot",
        message: "Would you like to add a screenshot? Use ![alt text](./assets/images/screenshot.png)",
    },
    */
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? ",
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email: ",
    }
    

])

.then ((data) => {
    console.log(data);
    fs.writeFile('README.md', generateMarkdown(data),
    error => {
        if (error) {
            console.log('Please Complete all the entries.')
        } 
        console.log('README was generated.')
        }
    )});