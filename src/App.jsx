import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadData from "./loadData/LoadData";
import Header from "./components/header/Header";
import RecipeList from "./components/home/RecipeList";
import ViewRecipe from "./components/recipeDetails/ViewRecipe";
import AddRecipe from "./components/addNewRecipe/AddRecipe";
import Dashboard from "./components/dashboard/Dashboard";
import Error404 from "./components/error/Error404";
import MaintanacePage from "./components/maintancePages/MaintancePage";

export default function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [search, setSearch] = useState("");
  const [isEditable, toggelEdit] = useState(false);
  const recipeListSize = 20;

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    if (width <= 1120) {
      setShowDashboard(false);
    } else {
      setShowDashboard(true);
    }
  }, [window.innerWidth]);

  if (!isDataLoaded) {
    return (
      <LoadData
        recipeListSize={recipeListSize}
        setIsDataLoaded={setIsDataLoaded}
      />
    );
  }

  return (
    <>
      <BrowserRouter>
        <div className="d-flex">
          {showDashboard && (
            <Dashboard isEditable={isEditable} toggelEdit={toggelEdit} />
          )}{" "}
          <div style={{ width: !showDashboard ? "100vw" : "84vw" }}>
            <Header
              showDashboard={showDashboard}
              search={search}
              setSearch={setSearch}
            />
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={
                    <RecipeList
                      search={search}
                      isEditable={isEditable}
                      toggelEdit={toggelEdit}
                    />
                  }
                />
                <Route path="/addrecipe" element={<AddRecipe />} />
                <Route
                  path="/viewrecipe/:recipeIndex"
                  element={<ViewRecipe />}
                />
                <Route path="/aboutus" element={<MaintanacePage />} />
                <Route path="/contactus" element={<MaintanacePage />} />
                <Route path="/*" element={<Error404 />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
