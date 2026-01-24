import axios from "axios";
import "./assets/styles/styles.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Add from "./pages/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  // Variable to set/update the recipes
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    // Fetch recipes from the server when the component mounts
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("/api/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="max-w-7xl m-auto p-4 body-content">
          <Routes>
            <Route path="/" element={<Recipes recipes={recipes} />} />
            <Route path="/add" element={<Add />} />
            {/* <Route path="/update/:id" element={} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
