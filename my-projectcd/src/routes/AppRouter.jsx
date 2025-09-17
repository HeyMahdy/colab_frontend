import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "../features/auth/Signup";
import Login from "../features/auth/Login";
import Home from "../features/auth/Home";

function AppRouter() {
    const user = useSelector((state) => state.auth.user);

    return (
        <Routes>
            <Route path="/" element={<Navigate to={user ? "/home" : "/login"} replace />} />
            <Route path="/signup" element={user ? <Navigate to="/home" /> : <Signup />} />
            <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
            <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={user ? "/home" : "/login"} replace />} />
        </Routes>
    );
}

export default AppRouter;