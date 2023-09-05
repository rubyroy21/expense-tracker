import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ExpenseDashboard from "../pages/ExpenseDashboard/ExpenseDashboard";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/expense-tracker-dashboard"
          element={<ExpenseDashboard />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
