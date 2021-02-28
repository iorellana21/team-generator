// call path and fs modules
const path = require('path');
const fs = require('fs');

// function to find all templates
const findTemplate = path.resolve(__dirname, "../templates");

// function to render team info
const renderTeam = team => {
    // array to contain team info
    const page = [];

    // get each role and pull info for each team member in functions below
    page.push(team.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)));
    page.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineer(engineer)));
    page.push(team.filter(employee => employee.getRole() === "Intern").map(intern => renderIntern(intern)));

    // update main team page
    return renderMain(page.join(""));
};

// function that pulls in manager info
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(findTemplate, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

// function that pulls in enginner info
const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(findTemplate, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "gitHub", engineer.getGitHub());
    return template;
};

// function that pulls in enginner info
const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(findTemplate, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};

// function for main page
const renderMain = page => {
    const template = fs.readFileSync(path.resolve(findTemplate, "main.html"), "utf8");
    return replacePlaceholders(template, "team", page);
};

// function to replace placeholders in html pages
const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = renderTeam;