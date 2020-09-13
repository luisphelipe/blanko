import app from "../app";

import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import models from "../../models";

chai.use(chaiHttp);

describe("GET /users", () => {
  it("Should render list of users");
  it("List of users should be paginated");
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
  it("Should create a new user");
  it("Should redirect to list of users");
});
