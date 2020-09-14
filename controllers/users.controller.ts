import user_validator from "./validators/user.validator";
import models from "../models";

const User = models.User;

export const list = async (req, res, next) => {
  // TODO: paginate
  const users = await User.findAll({});
  return res.render("users", { users });
};

export const create = async (req, res, next) => {
  // TODO: translate validation errors
  const { error, value } = user_validator.validate(req.body);
  if (error) return res.status(406).render("users/new", { error, value });

  const user = await User.findOne({ where: { email: value.email } });

  if (user) {
    const err = { details: [{ message: "E-mail já cadastrado." }] };

    // Ideally I should redirect instead of rendering
    return res.status(406).render("users/new", { error: err, value });
  }

  await User.create(value);

  return res.redirect("/users");
};
