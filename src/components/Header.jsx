import React from "react";

export default function Header() {
  return (
    <>
      <header
        className="d-flex text-bg-dark bg-black flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 "
        style={{ height: "70px", width: "85vw" }}
      >
        <ul className="nav mx-4 col-md-3 mb-2 mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-md-3 text-end mx-4">
          <button type="button" className="btn btn-outline-primary me-3">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </>
  );
}
