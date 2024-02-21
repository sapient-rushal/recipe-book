import React from "react";

export default function Dashboard() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark bg-black"
        style={{ width: "280px", minHeight: "100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4 mx-5">Recipe-Book</span>
        </a>
        <hr className="" />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Add new Recipe
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
