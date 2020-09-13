import Joi from "joi";

const user_schema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(100)
    .pattern(/^[A-z ]+$/)
    .required(),
  email: Joi.string().email().required(),
});

const validate_user = (user) =>
  user_schema.validate(user, { abortEarly: false });

export default { validate: validate_user };
