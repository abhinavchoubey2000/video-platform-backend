import express from "express";
import cors from "cors";
import { limit } from "./constants";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(cookieParser());
app.use(express.json({ limit }));
app.use(express.urlencoded({ extended: true, limit }));
app.use(express.static("public"));

export { app };
