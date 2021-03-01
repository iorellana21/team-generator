// call Employee class to test
const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should call Employee class", () => {
            const e = new Employee();

            expect(typeof (e)).toBe("object");
        });
    });

    describe("Employee info", () => {
        it("should return name of employee", () => {
            const name = "Sabrina";

            const obj = new Employee(name);

            expect(obj.getName()).toEqual(name);
        });

        it("should return id of employee", () => {
            const id = 201;

            const obj = new Employee("Sabrina", id);

            expect(obj.getId()).toEqual(id);
        });

        it("should return email of employee", () => {
            const email = "fishchz@gmail.com";

            const obj = new Employee("Sabrina", 201, email);

            expect(obj.getEmail()).toEqual(email);
        });

    });
});
