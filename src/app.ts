import cors from "cors";
import express, { Request, Response } from "express";
const app = express();

// parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello PH University!");
});

export default app;
