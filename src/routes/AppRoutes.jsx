import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}