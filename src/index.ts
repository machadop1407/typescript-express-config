import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response): void => {
  res.json({ message: "Please Like the Video!" });
});

app.listen("3001", (): void => {
  console.log("Server Running!");
});
