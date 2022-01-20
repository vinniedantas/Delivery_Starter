import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import "express-async-errors";
import { errorHandler } from "../middlewares/errors/AppError";
import { routes } from "../api/index";


dotenv.config()

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler)

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());


export { app };