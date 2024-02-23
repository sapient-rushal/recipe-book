import React from "react";
import { Link } from "react-router-dom";

export default function Header({
  showDashboard,
  search,
  setSearch,
  isEditable,
  toggelEdit,
}) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-black"
      style={{ minHeight: "70px", minWidth: "84vw" }}
    >
      <div className="container">
        <Link className="navbar-brand text-light" to="/">
          {!showDashboard ? "Recipe-Book" : ""}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {!showDashboard && (
              <>
                <li className="nav-item">
                  <Link to="/addrecipe" className="nav-link text-light">
                    Add new Recipe
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    onClick={() => {
                      toggelEdit(!isEditable);
                    }}
                    className="nav-link text-light"
                  >
                    {!isEditable ? "Edit Recipes" : "Disable Edit"}
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link text-light" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-item">
            <div className="d-flex">
              <input
                className="form-control me-2"
                value={search}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    event.target.blur();
                  }
                }}
              />
              <button className="btn btn-outline-primary mx-2" type="button">
                LogIn
              </button>
              <button className="btn btn-primary" type="button">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
