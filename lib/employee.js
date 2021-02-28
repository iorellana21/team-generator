// The first class is an 'Employee' parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
// the other 3 classes will extend 'Employee' class

class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email,
        this.role = 'employee'
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;