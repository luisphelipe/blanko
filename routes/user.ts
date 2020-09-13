import { Router } from "express";
import { list, create } from "../controllers/users.controller";

const router = Router();

router.get("/", list);

router.get("/new", (req, res, next) => {
  return res.render("users/new");
});

router.post("/", create);

export default router;
