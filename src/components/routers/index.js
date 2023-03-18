import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import Login2 from "../auth/Login2";
import Register from "../auth/Register";
import Register2 from "../auth/Register2";
import Register3 from "../auth/Register3";
import Dashboard from "../dashboard/Dashboard";

import Landing from "../layouts/Landing";
import { AddExperience } from "../profile-forms/Add-Experience";
import CreateProfile from "../profile-forms/CreateProfile";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login2></Login2>}></Route>
        <Route path="/register" element={<Register3></Register3>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/create-profile"
          element={<CreateProfile></CreateProfile>}
        ></Route>
        <Route
          path="/edit-profile"
          element={<CreateProfile></CreateProfile>}
        ></Route>
        <Route
          path="/add-experience"
          element={<AddExperience></AddExperience>}
        ></Route>
      </Routes>
    </>
  );
};

export default Routers;
