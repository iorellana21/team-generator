// call Employee class to test
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should call Engineer class", () => {
            // setup
            const e = new Engineer();
            // expect
            expect(typeof (e)).toBe("object");
        });
    });

    describe("Engineer info", () => {
        it("should return role of engineer", () => {
            const role = "Senior Engineer";

            const obj = new Engineer();

            expect(obj.getRole()).toEqual(role);
        });

        it("should return gitHub username of engineer", () => {
            const username = "gitHubName";

            const obj = new Engineer();

            expect(obj.getGitHub()).toEqual(username);
        });
    });
});
