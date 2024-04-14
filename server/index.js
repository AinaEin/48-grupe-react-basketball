import express from "express";

const PORT = 4823;
const app = express();

app.get("/", (req, res) => {
  return res.send("Home page");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
