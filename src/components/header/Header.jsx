import React from "react";
import { Link } from "react-router-dom";

export default function Header({ search, setSearch, isEditable, toggelEdit }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-black navbar-dark row text-center"
        style={{ minHeight: "70px", minWidth: "84vw" }}
      >
        <div className="container-fluid">
          <Link className="col-2 navbar-brand text-light" to="/">
            Recipe-Book
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="col-6 navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/"
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
                  onClick={() => {
                    toggelEdit(!isEditable);
                  }}
                  className="nav-link text-light"
                >
                  {!isEditable ? "Edit Recipes" : "Disable Edit"}
                </Link>
              </li>

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
            <div className="col-4 nav-item mx-3">
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
                <Link
                  to="/login"
                  className="mx-2 btn btn-outline-primary mx-2"
                  type="button"
                >
                  LogIn
                </Link>
                <Link to="/signup" className="mx-2 btn btn-primary" type="button">
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
