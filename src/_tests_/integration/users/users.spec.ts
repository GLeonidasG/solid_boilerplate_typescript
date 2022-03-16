import assert from "assert";
import { UserRepository } from "../../../adapters/PrismaRepositories/UserRepository";
import { UserService } from "../../../application/services/users/UserService";

const CRUD_TEST = {
  positiveScenario: {
    name: "somename",
    username: "some_username",
    password: "we have some password",
  },
  negativeScenario: {
    name: "somename",
    username: "some_username",
    password: "",
  },
};

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

describe("User execution", () => {
  afterEach(async () => {
    await userService.delete(CRUD_TEST.positiveScenario.username);
  });
  it("should return an error if password has no length", async () => {
    assert.throws(async () => {
      const user = await userService.create(CRUD_TEST.positiveScenario);
    })
  });
});
