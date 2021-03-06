const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");



const template = require("./src/page-template.js");

const teamMembers = [];
const idArray = [];
const isEmail = /\S+@\S+\.\S+/;
const isNum = /^[1-9]\d*$/;

function createTeam() {

  function createManager() {
    console.log("Please build your team");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
        validate: answer => {
          const pass = answer.match(
            isNum
          );
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: answer => {
          const pass = answer.match(
            isEmail
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        validate: answer => {
          const pass = answer.match(
            isNum
          );
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        }
      }
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamMembers.push(manager);
      idArray.push(answers.managerId);
      createTeam();
    });
  }

  function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name? (Required)",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter your engineer's name.";
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id? (Required)",
        validate: answer => {
          const pass = answer.match(
            isNum
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "This id is taken. Please enter a different number.";
            } else {
              return true;
            }

          }
          return "Please enter you engineer's id.";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email? (Required)",
        validate: answer => {
          const pass = answer.match(
            isEmail
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username? (Required)",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter your engineer's Github.";
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name? (Required)",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter your intern's name.";
        }
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id? (Required)",
        validate: answer => {
          const pass = answer.match(
            isNum
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "This ID is already taken. Please enter a different number.";
            } else {
              return true;
            }

          }
          return "Please enter your intern's id.";
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email? (Required)",
        validate: answer => {
          const pass = answer.match(
            isEmail
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school? (Required)",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter your intern's school.";
        }
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      idArray.push(answers.internId);
      createTeam();
    });
  }

  function buildTeam() {
    
      fs.writeFileSync('./dist/index.html', template(teamMembers), "utf-8");
    }
  
    createManager();
  
  }
  
  createTeam();
