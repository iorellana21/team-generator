// call Employee class to test
const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should call Intern class", () => {
            // setup
            const e = new Intern();
            // expect
            expect(typeof (e)).toBe("object");
        });
    });

    describe("Intern info", () => {
        it("should return role of intern", () => {
            const role = "Intern";

            const obj = new Intern();

            expect(obj.getRole()).toEqual(role);
        });

        it("should return school of intern", () => {
            const schoolName = "Ramapo";

            const obj = new Intern("Sabrina", 1, "test@email.com", schoolName);

            expect(obj.school).toEqual(schoolName);
        });
    });
});
