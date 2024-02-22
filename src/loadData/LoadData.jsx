import axios from "axios";
import React, { useEffect } from "react";
import defaultRecipeImage from "../assets/recipeCard-image/default-recipe-image.jpg";

export default function LoadData({ recipeListSize, setIsDataLoaded }) {
  const recipeData = localStorage.getItem("recipeData");
  if (recipeData) {
    setIsDataLoaded(true);
    return <></>;
  }

  useEffect(() => {
    const fetchRecipies = async () => {
      const options = {
        method: "GET",
        url: "https://api.spoonacular.com/recipes/random",
        params: {
          apiKey: "82ef7aad173647f99aa490187468cc78",
          number: recipeListSize,
        },
      };

      try {
        const response = await axios.request(options);

        const recipeData = response.data.recipes.map((recipe) => {
          if (recipe.image) {
            return recipe;
          } else {
            return { ...recipe, image: defaultRecipeImage };
          }
        });

        localStorage.setItem("recipeData", JSON.stringify(recipeData));
        setIsDataLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipies();
  }, []);

  return <></>;
}
