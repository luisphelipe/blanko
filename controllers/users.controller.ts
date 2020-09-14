import user_validator from "./validators/user.validator";
import name_validator from "./validators/user_name.validator";
import models from "../models";

const User = models.User;

const paginate = ({ page = 1, limit = 10 }) => ({
  limit,
  offset: (page - 1) * limit,
});

export const list = async (req, res, next) => {
  const users = await User.findAll({
    attributes: ["id", "email", "name"],
    raw: true,
    order: [["updatedAt", "DESC"]],
    ...paginate(req.query),
  });

  const count = await User.count();

  return res.render("users", { users, page: req.query.page || 1, count });
};

export const create = async (req, res, next) => {
  // TODO: translate validation errors
  const { error, value } = user_validator.validate(req.body);
  if (error) return res.status(406).render("users/new", { error, value });

  const user = await User.findOne({ where: { email: value.email } });

  if (user) {
    const err = { details: [{ message: "E-mail já cadastrado." }] };

    // Ideally should redirect instead of rendering
    return res.status(406).render("users/new", { error: err, value });
  }

  await User.create(value);

  return res.redirect("/users");
};

export const edit = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  if (!user) res.redirect("/users");
  return res.render("users/edit", { user });
};

export const update = async (req, res, next) => {
  const { error, value } = name_validator.validate(req.body);
  const user = await User.findOne({ where: { id: req.params.id } });

  if (error)
    return res.status(406).render("users/edit", { user, error, value });

  if (!user) {
    const err = { details: [{ message: "Usuario não encontrado." }] };

    // Ideally should redirect instead of rendering
    return res.status(406).render("users/new", { error: err, value });
  }

  user.name = value.name;
  await user.save();

  return res.redirect("/users");
};

export const destroy = async (req, res, next) => {
  await User.destroy({ where: { id: req.params.id } });
  return res.redirect("/users");
};
