import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ search, isEditable, toggelEdit }) {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("recipeData");
    setRecipeList(JSON.parse(data));
  }, []);

  return (
    <div className="container mb-5">
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
        {recipeList.map((recipe, index) => {
          if (search.length === 0) {
            return (
              <RecipeCard
                key={index}
                recipe={recipe}
                index={index}
                isEditable={isEditable}
                toggelEdit={toggelEdit}
              />
            );
          }
          const isIngredient =
            recipe.extendedIngredients
              .map((ingredient) => ingredient.originalName.toLowerCase())
              .filter((item) =>
                item.toLowerCase().includes(search.toLowerCase())
              ).length !== 0;

          if (
            recipe.title.toLowerCase().includes(search.toLowerCase()) ||
            isIngredient
          ) {
            return (
              <RecipeCard
                key={index}
                recipe={recipe}
                index={index}
                isEditable={isEditable}
                toggelEdit={toggelEdit}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
