import Joi from "joi";

export const name_type = Joi.string()
  .min(3)
  .max(100)
  .pattern(/^[A-z ]+$/)
  .required();

const name_schema = Joi.object({
  name: name_type,
});

const validate_name = (user) =>
  name_schema.validate(user, { abortEarly: false });

export default { validate: validate_name };
