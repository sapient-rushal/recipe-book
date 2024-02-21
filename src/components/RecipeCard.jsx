import React from "react";
import { FaRegClock } from "react-icons/fa6";

export default function RecipeCard({ recipe }) {
  //   console.log(recipe);
  return (
    <>
      <div className="col">
        <div className="card h-100 bg-dark-subtle">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <FaRegClock /> {recipe.readyInMinutes}m
          </span>
          <img src={recipe.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <div className="d-flex me-2 mt-auto">
              <a href="#" className="btn btn-primary me-auto">
                Recipe
              </a>
              <p className="card-text">{recipe.servings}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
