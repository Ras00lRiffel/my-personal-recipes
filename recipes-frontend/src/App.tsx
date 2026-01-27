import axios from "axios";
import "./assets/styles/styles.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Add from "./pages/Add";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

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
  }, [location.key]);

  return (
    <div className="App">
      <Header />
      <div className="max-w-7xl m-auto p-4 body-content">
        <Routes>
          <Route path="/" element={<Recipes recipes={recipes} />} />
          <Route path="/add" element={<Add />} />
          {/* <Route path="/update/:id" element={} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
