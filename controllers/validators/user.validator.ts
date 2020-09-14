import Joi from "joi";
import { name_type } from "./user_name.validator";

const user_schema = Joi.object({
  name: name_type,
  email: Joi.string().email().required(),
});

const validate_user = (user) =>
  user_schema.validate(user, { abortEarly: false });

export default { validate: validate_user };
