import app from "../app";

import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

describe("GET /", () => {
  it("Should redirect to /users", async () => {
    const res = await chai.request(app).get("/");

    expect(res).to.redirectTo(/\/users$/);
  });
});

describe("GET /home", () => {
  xit('Should render a basic page with "Hey Test"', async () => {
    const res = await chai.request(app).get("/home");

    expect(res).to.have.status(200);
    expect(res).to.have.header("content-type", "text/html; charset=utf-8");
    expect(res.text).to.contain("Hey Test");
  });
});
