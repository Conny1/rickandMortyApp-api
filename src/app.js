import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import routers from "./routes/index.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/v1", routers);

export default app;
