// index.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let recipes = [];

app.get("/recipes", (req, res) => res.json(recipes));
app.post("/recipes", (req, res) => {
  recipes.push(req.body);
  res.json({ success: true });
});
app.delete("/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  recipes = recipes.filter((_, i) => i !== id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on port 5000"));
