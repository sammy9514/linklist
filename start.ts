import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 4000;
app.use(express.json());
const server = app.get("/", (req: Request, res: Response) => {
  res.send("running");
});

app.listen(port, () => {
  console.log("server is running");
});
process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);
  process.exit(1);
});

process.on("rejectionHandled", (reason: any) => {
  console.log("rejectionHandled", reason);

  server.close(() => {
    process.exit(1);
  });
});
