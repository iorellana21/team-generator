// In addition to 'employee' properties and methods, 'Engineer' will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email),
        this.gitHub = "gitHubName"
    }

    getRole() {
        return 'Engineer';
    }

    getGitHub() {
        return this.gitHub;
    }
};

module.exports = Engineer;