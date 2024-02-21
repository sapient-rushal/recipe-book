import React, { useState } from "react";

export default function AddRecipe() {
  const [recipeDetails, setRecipeDetails] = useState({
    recipeTitle: "",
    recipeTime: "",
    recipeIngredients: "",
    recipeInstructions: "",
  });

  const handleChange = (event) => {
    setRecipeDetails({
      ...recipeDetails,
      [event.target.name]: event.target.value,
    });
  };

  const addNewRecipe = (event) => {
    event.preventDefault();
    const recipeObj = {
      title: recipeDetails.recipeTitle,
      readyInMinutes: recipeDetails.recipeTime,
      extendedIngredients: recipeDetails.recipeIngredients.split(","),
      instructions: recipeDetails.recipeInstructions.split("."),
    };
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center mb-4">
        <div className="col-md-6 text-center fs-1">Add new Recipe</div>
      </div>

      <form onSubmit={addNewRecipe}>
        <div className="mb-3">
          <label htmlFor="recipeTitle" className="form-label">
            Title
          </label>
          <input
            value={recipeDetails.recipeTitle}
            type="text"
            className="form-control"
            name="recipeTitle"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipeTime" className="form-label">
            Cooked time (in minute)
          </label>
          <input
            value={recipeDetails.recipeTime}
            type="number"
            className="form-control"
            name="recipeTime"
            onChange={handleChange}
            min={1}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipeIngredients" className="form-label">
            Ingredients (separated by comma)
          </label>
          <input
            value={recipeDetails.recipeIngredients}
            type="text"
            className="form-control"
            name="recipeIngredients"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipeInstructions" className="form-label">
            instructions (separated by full-stop)
          </label>
          <textarea
            value={recipeDetails.recipeInstructions}
            className="form-control"
            name="recipeInstructions"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
