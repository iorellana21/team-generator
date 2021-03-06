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
            const role = "Engineer";

            const obj = new Engineer();

            expect(obj.getRole()).toEqual(role);
        });

        it("should return gitHub username of engineer", () => {
            const username = "gitHubName";

            const obj = new Engineer("Ivan", 1, "test@gmail.com", username);

            expect(obj.gitHub).toEqual(username);
        });
    });
});
