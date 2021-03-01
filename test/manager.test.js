// call Employee class to test
const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should call Manager class", () => {
            // setup
            const e = new Manager();
            // expect
            expect(typeof (e)).toBe("object");
        });
    });

    describe("Manager info", () => {
        it("should return role of manager", () => {
            const role = "Manager";

            const obj = new Manager();

            expect(obj.getRole()).toEqual(role);
        });

        it("should return office number of manager", () => {
            const number = 201;

            const obj = new Manager("Sabrina", 1, "manager@gmail.com", number);

            expect(obj.officeNumber).toEqual(number);
        });
    });
});
