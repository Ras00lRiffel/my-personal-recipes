import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from "../components/Inputs/Input";

const labels = [
  {
    label: "Recipe Name",
    name: "name",
    placeholder: "e.g. Chocolate Cake",
  },
  {
    label: "Ingredients",
    name: "ingredients",
    placeholder: "e.g. Flour, sugar, cocoa...",
  },
  {
    label: "Instructions",
    name: "instructions",
    placeholder: "e.g. Mix, bake, cool...",
  },
  {
    label: "Recipe Author",
    name: "author",
    placeholder: "e.g. Abuakr Solomon",
  },
  {
    label: "Cook Time",
    name: "cookTime",
    placeholder: "e.g. 30 minutes",
  },
  {
    label: "Prep Time",
    name: "prepTime",
    placeholder: "e.g. 15 minutes",
  },
  {
    label: "Servings",
    name: "servings",
    placeholder: "e.g. 4",
  },
  {
    label: "Category",
    name: "category",
    categories: ["Breakfast", "Lunch", "Dinner", "Snack"],
  },
  {
    label: "Image",
    name: "image",
  },
];

const initialRecipe = {
  name: "",
  instructions: [],
  ingredients: [],
  category: "",
  image: "",
  author: "",
  cookTime: "",
  prepTime: "",
  servings: "",
};

const Add = () => {
  const [recipe, setRecipe] = useState(initialRecipe);
  const navigate = useNavigate();

  const handleChange = async (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as any;
    if (name === "image" && files && files[0]) {
      const formData = new FormData();
      formData.append("file", files[0]);
      try {
        const res = await fetch("http://localhost:8800/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        setRecipe((prev) => ({ ...prev, image: data.url }));
      } catch (error) {
        console.error("File upload failed", error);
      }
    } else {
      setRecipe((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInputChange = (field: string, vals: string[]) => {
    setRecipe((prev) => ({
      ...prev,
      [field]: vals,
    }));
  };

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Submitting recipe:", recipe);
      await axios.post("http://localhost:8800/api/recipes", recipe);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const renderField = (item: (typeof labels)[number], i: number) => {
    const name = item.name
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace("recipeauthor", "author")
      .replace("cooktime", "cookTime")
      .replace("preptime", "prepTime")
      .replace("servings", "servings");

    if (item.label === "Ingredients" || item.label === "Instructions") {
      return (
        <div className="mt-4 sm:col-span-4" key={i}>
          <label className="max-w-2xl m-auto block text-sm/6 font-medium text-gray-900">
            {item.label}
          </label>
          <Input onChange={(vals) => handleInputChange(name, vals)} />
        </div>
      );
    }
    if (item.label === "Category" && item.categories) {
      return (
        <div className="mt-4 sm:col-span-4" key={i}>
          <label className="max-w-2xl m-auto block text-sm/6 font-medium text-gray-900">
            {item.label}
          </label>
          <div className="mt-2 max-w-2xl m-auto">
            <select
              name={name}
              className="block w-full rounded-md bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 border border-gray-300 focus:outline-none sm:text-sm/6"
              onChange={handleChange}
              value={recipe.category}
            >
              <option value="">Select a category</option>
              {item.categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    }
    if (item.label === "Image") {
      return (
        <div className="mt-4 sm:col-span-4" key={i}>
          <label className="max-w-2xl m-auto block text-sm/6 font-medium text-gray-900">
            {item.label}
          </label>
          <div className="mt-2 max-w-2xl m-auto">
            <input
              type="file"
              className="block border border-gray-300 rounded-md bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              name={name}
              onChange={handleChange}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="mt-4 sm:col-span-4" key={i}>
        <label className="max-w-2xl m-auto block text-sm/6 font-medium text-gray-900">
          {item.label}
        </label>
        <div className="mt-2">
          <div className="max-w-2xl m-auto flex items-center rounded-md bg-white pl-1 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              type="text"
              name={name}
              placeholder={item.placeholder}
              className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              onChange={handleChange}
              value={(recipe as any)[name] || ""}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-center">Add a New Recipe</h2>
      <form className="recipe-form" onSubmit={handleClick}>
        {labels.map(renderField)}
        <div className="submit-btn mt-6 text-center">
          <Button
            text="Submit"
            classes="max-w-2xl m-auto w-full"
            onClick={handleClick}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
