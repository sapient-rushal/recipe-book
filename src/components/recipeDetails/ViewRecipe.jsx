import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewRecipeCard from "./viewRecipeCard";

export default function ViewRecipe() {
  const { recipeIndex } = useParams();

  const storageData = localStorage.getItem("recipeData");
  const recipe = JSON.parse(storageData)[recipeIndex];

  return (
    <>
      <ViewRecipeCard recipe={recipe} />{" "}
    </>
  );
}
