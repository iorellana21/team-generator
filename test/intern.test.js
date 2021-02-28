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
            const school = "Ramapo";

            const obj = new Intern();

            expect(obj.getSchool()).toEqual(school);
        });
    });
});
