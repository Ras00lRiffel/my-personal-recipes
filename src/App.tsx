import axios from "axios";
import "./assets/styles/styles.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  // Variable to set/update the recipes
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    // Fetch recipes from the server when the component mounts
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:8800");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="App">
      {/* #display the fetched recipes */}
      {/* {recipes.map((recipe) => (
        <p>{recipe.id}</p>
      ))} */}

      <Header />
      <div className="max-w-7xl m-auto p-4 body-content">
        <p>You have 10 Recipes!</p>

        <Recipes recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
