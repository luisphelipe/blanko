import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env-test") });

import models from "../models";

before(async () => {
  const models_to_clear = ["User"];

  for (let model of models_to_clear) {
    await models[model].destroy({ truncate: true });
  }
  // Any database cleaning or seeding goes here.
});
