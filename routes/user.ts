import { Router } from "express";
import {
  list,
  create,
  edit,
  update,
  destroy,
} from "../controllers/users.controller";

const router = Router();

router.get("/", list);

router.get("/new", (req, res, next) => {
  return res.render("users/new");
});

router.post("/", create);

router.get("/:id/edit", edit);

// Should be router.put
router.post("/:id", update);

// Should be router.delete
router.get("/:id/delete", destroy);

export default router;
