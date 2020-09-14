import { Router } from "express";
const router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  return res.redirect("/users");
});

// router.get("/home", function (req, res, next) {
//   return res.render("home", { name: "Test" });
// });

export default router;
