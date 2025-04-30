import express from "express";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.status(200).json({
    hello: "Hello World",
  });
});
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
