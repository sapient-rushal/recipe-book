import React, { useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import RecipeList from "./components/RecipeList";

import recipeData from "./data/recipies.json";
import ViewRecipe from "./components/ViewRecipe";
import AddRecipe from "./components/AddRecipe";

export default function App() {
  // console.log(recipeData.recipes);

  useEffect(() => {
    const fetchRecipies = async () => {
      const options = {
        method: "GET",
        url: "https://api.api-ninjas.com/v1/recipe?query=potato",
        headers: {
          "X-Api-Key": "cP7Z0oE3Uli0d5ukEZu5Uw==8ZJbfxIiNGBaNBL8",
        },
      };

      try {
        const response = await axios.request(options);
        // console.log(response.data);
        localStorage.setItem("recipeData", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    localStorage.setItem("recipeData", JSON.stringify(recipeData.recipes));
    // fetchRecipies();
  }, []);

  return (
    <>
      <div className="d-flex">
        <Dashboard />
        <div>
          <Header />
          {/* <RecipeList /> */}
          {/* <ViewRecipe recipe={recipeData.recipes[0]} /> */}
          <AddRecipe />
        </div>
      </div>
    </>
  );
}
