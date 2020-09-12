import models from "../../models";
import { expect } from "chai";
import UserFactory from "../factories/user.factory";

const User = models.User;

describe("USER", () => {
  describe("Create", () => {
    it("From valid data", async () => {
      const data = { name: "test", email: "test@gmail.com" };

      const user = await User.create(data);

      expect(user.name).to.eql("test");
      expect(user.email).to.eql("test@gmail.com");
    });

    it("From factory data", async () => {
      const data = UserFactory.build();

      const user = await User.create(data);

      expect(user.name).to.eql(data.name);
      expect(user.name).to.match(/^Robot [A-Z]+$/);

      expect(user.email).to.eql(data.email);
      expect(user.email).to.match(/^robot\d+@test\.com$/);
    });
  });
});
