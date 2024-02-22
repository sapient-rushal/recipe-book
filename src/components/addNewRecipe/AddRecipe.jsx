import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
  const navigate = useNavigate();

  const initialObj = {
    recipeTitle: "",
    recipeUrl: "",
    recipeTime: 1,
    recipeServing: 1,
    recipeIngredients: "",
    recipeInstructions: "",
    isVeg: true,
  };

  const [recipeDetails, setRecipeDetails] = useState(initialObj);

  const handleChange = (event) => {
    if (event.target.type === "radio") {
      setRecipeDetails({
        ...recipeDetails,
        isVeg: event.target.value === "veg",
      });
    } else {
      setRecipeDetails({
        ...recipeDetails,
        [event.target.name]: event.target.value,
      });
    }
  };

  const addNewRecipe = (event) => {
    event.preventDefault();

    const recipeObj = {
      vegetarian: recipeDetails.isVeg,
      servings: recipeDetails.recipeServing,
      title: recipeDetails.recipeTitle,
      image: recipeDetails.recipeUrl,
      readyInMinutes: recipeDetails.recipeTime,
      extendedIngredients: recipeDetails.recipeIngredients
        .split(",")
        .map((ingredient) => {
          return {
            original: ingredient,
          };
        }),
      analyzedInstructions: new Array({
        steps: recipeDetails.recipeInstructions
          .split(".")
          .map((instruction) => {
            return { step: instruction };
          }),
      }),
    };

    let recipeData = localStorage.getItem("recipeData");
    recipeData = JSON.parse(recipeData);
    recipeData.unshift(recipeObj);

    localStorage.setItem("recipeData", JSON.stringify(recipeData));

    setRecipeDetails(initialObj);
    navigate("/");
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center mb-4">
          <div className="col-md-6 text-center fs-1">Add new Recipe</div>
        </div>

        <form onSubmit={addNewRecipe}>
          <div className="mb-3 row">
            <div className="col">
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
            <div className="col">
              <label htmlFor="recipeUrl" className="form-label">
                image Url
              </label>
              <input
                value={recipeDetails.recipeUrl}
                type="url"
                className="form-control"
                name="recipeUrl"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="recipeServing" className="form-label">
                Total Servings
              </label>
              <input
                value={recipeDetails.recipeServing}
                type="number"
                className="form-control"
                name="recipeServing"
                onChange={handleChange}
                min={1}
              />
            </div>
            <div className="col">
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
          </div>
          <div className="mb-3">
            <label htmlFor="recipeIngredients" className="form-label">
              Ingredients (separated by comma)
            </label>
            <textarea
              value={recipeDetails.recipeIngredients}
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
              rows={3}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="isVeg"
                id="veg"
                value="veg"
                onChange={handleChange}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="veg">
                Veg
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="isVeg"
                id="non-veg"
                value="nonveg"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="non-veg">
                Non-Veg
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
