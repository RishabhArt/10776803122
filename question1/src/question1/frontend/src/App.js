import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes")
      .then((res) => setRecipes(res.data));
  }, []);

  const submitRecipe = () => {
    axios
      .post("http://localhost:5000/recipes", form)
      .then(() => window.location.reload());
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🍽️ Recipe Manager</h1>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        style={{ display: "block", marginBottom: "10px", width: "300px" }}
      />
      <input
        placeholder="Ingredients"
        value={form.ingredients}
        onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
        style={{ display: "block", marginBottom: "10px", width: "300px" }}
      />
      <textarea
        placeholder="Instructions"
        value={form.instructions}
        onChange={(e) => setForm({ ...form, instructions: e.target.value })}
        style={{
          display: "block",
          marginBottom: "10px",
          width: "300px",
          height: "80px",
        }}
      ></textarea>
      <button onClick={submitRecipe}>Add Recipe</button>

      <h2 style={{ marginTop: "30px" }}>📋 All Recipes</h2>
      {recipes.map((r, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <h3>{r.title}</h3>
          <p>
            <strong>Ingredients:</strong> {r.ingredients}
          </p>
          <p>
            <strong>Instructions:</strong> {r.instructions}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
