// In addition to 'Employee' properties and methods, 'Manager' will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'

const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email),
        this.officeNumber = officeNumber,
        this.role = role
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;