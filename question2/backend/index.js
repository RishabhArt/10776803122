// index.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const users = [];

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  if (users.find((u) => u.email === email))
    return res.status(400).json({ msg: "Email exists" });
  users.push({ name, email, password });
  res.json({ msg: "User registered" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const match = users.find((u) => u.email === email && u.password === password);
  if (!match) return res.status(401).json({ msg: "Invalid credentials" });
  res.json({ msg: `Welcome ${match.name}` });
});

app.listen(6000, () => console.log("Auth server on 6000"));
