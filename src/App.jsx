import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadData from "./data/LoadData";
import Header from "./components/header/Header";
import RecipeList from "./components/screens/RecipeList";
import ViewRecipe from "./components/screens/ViewRecipe";
import AddRecipe from "./components/screens/AddRecipe";
import Error404 from "./components/error/Error404";
import MaintanacePage from "./components/maintancePages/MaintancePage";
import LogIn from "./components/user/Login";
import Signup from "./components/user/Signup";

export default function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [isEditable, toggelEdit] = useState(false);
  const [storageDataChange, setStorageDataChange] = useState(false);

  const recipeListSize = 20;

  return (
    <>
      {!isDataLoaded ? (
        <LoadData
          recipeListSize={recipeListSize}
          setIsDataLoaded={setIsDataLoaded}
        />
      ) : (
        <BrowserRouter>
          <div className="d-flex">
            <div style={{ width: "98.5vw" }}>
              <Header
                search={search}
                setSearch={setSearch}
                isEditable={isEditable}
                toggelEdit={toggelEdit}
                storageDataChange={storageDataChange}
                setStorageDataChange={setStorageDataChange}
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

                  <Route
                    path="/login"
                    element={
                      <LogIn setStorageDataChange={setStorageDataChange} />
                    }
                  />

                  <Route path="/signup" element={<Signup />} />

                  <Route path="/aboutus" element={<MaintanacePage />} />
                  <Route path="/contactus" element={<MaintanacePage />} />
                  <Route path="/*" element={<Error404 />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}
