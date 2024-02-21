import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("recipeData");
    setRecipeList(JSON.parse(data));
    // console.log(JSON.parse(data));
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-5 g-4 mx-5 my-4">
        {recipeList.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </>
  );
}
