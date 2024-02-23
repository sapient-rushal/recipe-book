import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ isEditable, toggelEdit }) {
  return (
    <div
      className="bg-black text-light p-3"
      style={{ width: "15vw", minHeight: "100vh" }}
    >
      <Link
        to="/"
        className="d-block text-center mb-3 text-decoration-none text-light"
      >
        <span className="fs-4">Recipe-Book</span>
      </Link>
      <hr className="text-light" />
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link active text-light"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addrecipe" className="nav-link text-light">
            Add new Recipe
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link text-light pe-auto"
            onClick={() => {
              toggelEdit(!isEditable);
            }}
          >
            {!isEditable ? "Edit Recipes" : "Disable Edit"}
          </Link>
        </li>
      </ul>
    </div>
  );
}
