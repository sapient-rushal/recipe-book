import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function EditModal({ recipe, index, toggelEdit, setShowModal }) {
  const initialObj = {
    recipeTitle: recipe.title,
    recipeUrl: recipe.image,
    recipeTime: recipe.readyInMinutes,
    recipeServing: recipe.servings,
    recipeIngredients: recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(","),
    recipeInstructions: recipe.analyzedInstructions[0].steps
      .map((instruction) => instruction.step)
      .join(""),
    isVeg: recipe.vegetarian,
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

  const handleSubmitChange = (event) => {
    event.preventDefault();
    toggelEdit(false);

    const instructions = recipeDetails.recipeInstructions.split(".");
    const lastIndex = instructions.length - 1;

    const mappedInstructions = instructions.map((instruction, index) => {
      if (index === lastIndex) {
        return { step: instruction.trim() };
      } else {
        return { step: instruction.trim() + "." };
      }
    });

    console.log(mappedInstructions);

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
        steps: mappedInstructions,
      }),
    };

    let recipeData = JSON.parse(localStorage.getItem("recipeData"));
    recipeData = recipeData.map((recipe, i) => {
      if (i == index) {
        return recipeObj;
      }
      return recipe;
    });

    localStorage.setItem("recipeData", JSON.stringify(recipeData));

    setShowModal(false);
  };

  return (
    <Modal show={true} onHide={() => setShowModal(false)} size="xl">
      <Modal.Header closeButton className="text-bg-dark">
        <Modal.Title>Edit Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-bg-dark">
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="recipeTitle" className="form-label">
              Title
            </label>
            <input
              value={recipeDetails?.recipeTitle}
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
              value={recipeDetails?.recipeUrl}
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
              value={recipeDetails?.recipeServing}
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
              value={recipeDetails?.recipeTime}
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
            value={recipeDetails?.recipeIngredients}
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
            value={recipeDetails?.recipeInstructions}
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
              defaultChecked={recipeDetails?.isVeg}
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
              defaultChecked={!recipeDetails?.isVeg}
            />
            <label className="form-check-label" htmlFor="non-veg">
              Non-Veg
            </label>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="text-bg-dark">
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="success" onClick={handleSubmitChange}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
