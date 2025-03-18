import * as express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.param("id", function (req, res, next, id) {
  console.log("app.param is called");
  next();
});

app.get("/", (req, res) => {
  const searchParam = req.param("search");
  res.send("Express + TypeScript Server" + searchParam);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
