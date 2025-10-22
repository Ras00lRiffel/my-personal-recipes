import axios from "axios";
import { useEffect, useState } from "react";
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
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter> */}
      {recipes.map((recipe) => (
        <p>{recipe.id}</p>
      ))}
    </div>
  );
};

export default App;
