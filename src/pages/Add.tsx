import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

const labels = [
  { label: "Recipe Name", placeholder: "e.g. Chocolate Cake" },
  { label: "Ingredients", placeholder: "e.g. Flour, sugar, cocoa..." },
  { label: "Instructions", placeholder: "e.g. Mix, bake, cool..." },
  { label: "Recipe Author", placeholder: "e.g. Abuakr Solomon" },
  { label: "Category", categories: ["Breakfast", "Lunch", "Dinner", "Snack"] },
  { label: "Image" },
];
const Add = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    instructions: "",
    ingredients: "",
    category: "",
    image: "",
  });
  const handleChange = async (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    // For file input
    if (
      name === "image" &&
      "files" in e.target &&
      e.target.files &&
      e.target.files[0]
    ) {
      const selectedFile = e.target.files[0];

      try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const res = await fetch("http://localhost:8800/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        console.log("File uploaded:", data.url);

        setRecipe((prev) => ({ ...prev, image: data.url }));
      } catch (error) {
        console.error("File upload failed", error);
      }
    } else {
      setRecipe((prev) => ({ ...prev, [name]: value }));
    }
  };

  const navigate = useNavigate();
  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/add", recipe);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="text-center">Add a New Recipe</h2>

      <div className="recipe-form">
        {labels.map((item, i) => {
          if (item.label === "Ingredients" || item.label === "Instructions") {
            const name = item.label.toLowerCase();
            return (
              <div className="mt-4 sm:col-span-4" key={i}>
                <label className="max-w-2xl m-auto block text-sm/6 font-medium text-gray-900">
                  {item.label}
                </label>
                <div className="mt-2">
                  <textarea
                    id={`field${i}`}
                    name={name}
                    placeholder={item.placeholder}
                    className="max-w-2xl m-auto block w-full rounded-md bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    rows={4}
                    onChange={handleChange}
                  />
                </div>
              </div>
            );
          }
          if (item.label === "Category" && item.categories) {
            const name = item.label.toLowerCase();

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
                    id="image"
                    name="image"
                    onChange={handleChange}
                  />
                </div>
              </div>
            );
          }

          return (
            <>
              <div className="mt-4 sm:col-span-4" key={i}>
                <label className="max-w-2xl m-auto block text-sm/6 font-medium text-gray-900">
                  {item.label}
                </label>
                <div className="mt-2">
                  <div className="max-w-2xl m-auto flex items-center rounded-md bg-white pl-1 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      type="text"
                      name="name"
                      placeholder={item.placeholder}
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className="submit-btn mt-6 text-center">
          <Button
            text="Submit"
            classes="max-w-2xl m-auto w-full"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Add;
