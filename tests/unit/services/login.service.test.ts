import { expect } from "chai";
import sinon from "sinon";
import loginService from "../../../src/services/login.services";
import userModel from "../../../src/database/models/user.model";
import bcrypt from "bcryptjs";
import * as middlews from "../../../src/middlewares/middlewares";

const testeUser = {
  username: "adm",
  password: "123",
};

const check = {
  id: 1,
  username: "adm",
  vocation: "adm",
  level: 1,
  password: "123",
};

describe("Login test", function () {
  beforeEach(function () {
    sinon.restore();
  });

  it("Check return a token", async function () {
    const user = check;

    const dataComp = userModel.build(user);
    sinon.stub(userModel, "findOne").resolves(dataComp);
    sinon.stub(bcrypt, "compareSync").returns(true);
    sinon.stub(middlews, "generateToken").callsFake(() => "token");

    const result = await loginService.authenticate(testeUser);

    expect(result).to.be.deep.equal({ status: "SUCCESSFUL", data: "token" });
  });

  it("Check return error", async function () {
    sinon.stub(userModel, "findOne").resolves(null);

    const result = await loginService.authenticate(testeUser);

    expect(result).to.be.deep.equal({
      status: "UNAUTHORIZED",
      data: { message: "Username or password invalid" },
    });
  });

  it("Check return an error ", async function () {
    const user = check;

    const dataComp = userModel.build(user);
    sinon.stub(userModel, "findOne").resolves(dataComp);
    sinon.stub(bcrypt, "compareSync").returns(false);

    const result = await loginService.authenticate(testeUser);

    expect(result).to.be.deep.equal({
      status: "UNAUTHORIZED",
      data: { message: "Username or password invalid" },
    });
  });
});
