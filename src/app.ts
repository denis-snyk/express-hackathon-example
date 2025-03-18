import * as express from "express";

export const app = express();

app.get("/", (req, res) => {
  const name = req.param("name");
  res.send(`Hello ${name || "World"}`);
});
