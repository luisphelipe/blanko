import app from "../app";

import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import models from "../../models";
import UserFactory from "../factories/user.factory";

const User = models.User;

chai.use(chaiHttp);

describe("GET /users", () => {
  it("Should render list of users with user and email");
  it("List of users should have pagination links");

  describe("Pagination", () => {
    it("Each page should have 10 users");
    it("Every next page should show the next 10 users");
  });
});

describe("GET /users/new", () => {
  it("Should render a form with input for name and email", async () => {
    const res = await chai.request(app).get("/users/new");

    expect(res.error).to.eql(false, res.error.message);
    expect(res).to.have.status(200);
    expect(res).to.have.header("content-type", "text/html; charset=utf-8");
    expect(res.text).to.contain("Cadastro de Usuário");
    expect(res.text).to.contain("Nome");
    expect(res.text).to.contain("E-mail");
  });
});

describe("POST /users", () => {
  it("Should create a new user", async () => {
    const data = UserFactory.build();
    const userCount = await User.count();

    const res = await chai.request(app).post("/users").send(data);

    expect(res.error).to.eql(false);
    expect(await User.count()).to.eql(userCount + 1);
  });

  it("Should redirect to list of users", async () => {
    const data = UserFactory.build();

    const res = await chai.request(app).post("/users").send(data);

    expect(res.error).to.eql(false);
    expect(res).to.redirectTo(/\/users$/);
  });

  it("Should redirect back to form with error and submited values");
});
