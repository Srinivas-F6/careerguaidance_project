import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import CareerPath from "./components/careerpath/careerpath";
import { Govtpath } from "./components/government/govtpath";
import { About } from "./components/About";
import { Login } from "./components/login";
import { Registration } from "./components/registration";
import Navbars from "./navbar";

function App() {

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
      <Navbars />

      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />

        {/* Public routes */}
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/careerpath"
          element={isAuthenticated ? <CareerPath /> : <Navigate to="/login" />}
        />
        <Route
          path="/govtpath"
          element={isAuthenticated ? <Govtpath /> : <Navigate to="/login" />}
        />

        {/* Public */}
        <Route path="/about" element={<About />} />

        {/* 404 */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
