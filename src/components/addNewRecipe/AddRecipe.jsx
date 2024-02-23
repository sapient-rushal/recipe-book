import React, { useState } from "react";
import Input from "../form/Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  title_validation,
  url_validation,
  servings_validation,
  time_validation,
  instructions_validation,
  ingredients_validation,
} from "../utils/AddFormValidation";

export default function AddRecipe() {
  const methods = useForm();
  const { register } = methods;
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    const recipeObj = {
      vegetarian: data.isVeg === "veg",
      servings: data.recipeServing,
      title: data.recipeTitle.trim(),
      image: data.recipeUrl.trim(),
      readyInMinutes: data.recipeTime,
      extendedIngredients: data.recipeIngredients
        .trim()
        .split(",")
        .map((ingredient) => {
          return {
            original: ingredient,
          };
        }),
      analyzedInstructions: new Array({
        steps: data.recipeInstructions
          .trim()
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

    methods.reset();
    setShowSuccessAlert(true);

    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  });

  return (
    <>
      {showSuccessAlert && (
        <div
          className=" alert alert-success alert-dismissible fade show position-absolute translate-middle-x "
          role="alert"
          style={{ zIndex: 9999, right: "0" }}
        >
          Recipe added successfully!
          <button
            type="button"
            className="btn-close me-auto"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowSuccessAlert(false)}
          ></button>
        </div>
      )}

      <div className="container my-5">
        <div className="my-5 row justify-content-center mb-4">
          <div className="col-md-6 text-center fs-1">Add new Recipe</div>
        </div>
        <FormProvider {...methods}>
          <form noValidate onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3 row">
              <div className="col">
                <Input {...title_validation} />
              </div>

              <div className="col">
                <Input {...url_validation} />
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col">
                <Input {...servings_validation} />
              </div>

              <div className="col">
                <Input {...time_validation} />
              </div>
            </div>

            <div className="mb-3">
              <Input {...ingredients_validation} />
            </div>

            <div className="mb-3">
              <Input {...instructions_validation} />
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isVeg"
                  id="veg"
                  value="veg"
                  defaultChecked
                  {...register("isVeg")}
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
                  {...register("isVeg")}
                />
                <label className="form-check-label" htmlFor="non-veg">
                  Non-Veg
                </label>
              </div>
            </div>

            <button onClick={onSubmit} className="btn btn-primary">
              Add
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
