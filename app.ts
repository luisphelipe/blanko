import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import reactEngine from "express-react-views";

import indexRouter from "./routes/index";

var app = express();

const ReactEngine = reactEngine.createEngine();
// This doesn't work for development build
const react_extension = process.env.NODE_ENV === "production" ? "js" : "tsx";

app.set("views", __dirname + "/views");
app.set("view engine", react_extension);
app.engine(react_extension, ReactEngine);

app.use(logger("dev", { skip: () => process.env.NODE_ENV === "test" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);

export default app;
