import React from "react";

export default function ViewRecipe({ recipe }) {
  //   console.log(recipe);
  let instructions = recipe.instructions.split(".");
  instructions.pop();

  return (
    <>
      <div className="mx-5 my-5">
        <span className="fs-1 fw-bold text-secondary">
          {recipe.title} (Cooked in {recipe.readyInMinutes} min)
        </span>
        <div className="d-flex mx-4 my-4">
          <img className="rounded-4" src={recipe.image} alt="" />
          <div className="my-5 mx-4">
            <span className=" fs-2 fw-bold text-secondary">Ingredients</span>
            <div className="d-flex flex-wrap mx-4 my-3">
              {recipe.extendedIngredients.map((ingredient) => (
                <span className=" fs-5 text-dark-emphasis bg-black m-1 px-3 py-2 rounded-4">
                  {ingredient.originalString}
                </span>
              ))}
            </div>
          </div>
        </div>
        <span className=" fs-2 fw-bold text-secondary">Instructions</span>
        <div className="my-4 mx-2">
          {instructions.map((instruction, index) => {
            return (
              <div className="my-4">
                <span className="fs-5 text-light bg-black m-1 px-3 py-2 rounded-circle">
                  {index + 1}
                </span>
                <span className=" fs-5 text-white-50 bg-black m-1 px-3 py-2 rounded-4">
                  {instruction}.
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
