import React from "react";
import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthTabs } from "./pages/auth";
import ForgotPassword from "./pages/auth/forgot-password/ForgotPassword";
import ResetPassword from "./pages/auth/reset-password/ResetPassword";

import Home from "./pages/home/Home";
import ProtectedRoute from "./pages/admin/AdminRoute";
import CreateHall from "./pages/admin/hall/CreateHall";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AuthTabs />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/admin/hall/create"
        element={
          <ProtectedRoute>
            <CreateHall />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
