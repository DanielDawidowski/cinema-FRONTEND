import React from "react";
import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthTabs } from "./pages/auth";
import ForgotPassword from "./pages/auth/forgot-password/ForgotPassword";
import ResetPassword from "./pages/auth/reset-password/ResetPassword";
import Home from "./pages/home/Home";
import ProtectedRoute from "./pages/admin/AdminRoute";
import CreateHall from "./pages/admin/hall/create/CreateHall";
import EditHall from "./pages/admin/hall/edit/EditHall";
import HallList from "./pages/admin/hall/list/HallList";
import MovieList from "./pages/admin/movie/list/MovieList";
import CreateMovie from "./pages/admin/movie/create/CreateMovie";
import EditMovie from "./pages/admin/movie/edit/EditMovie";
import CreateShow from "./pages/admin/show/create/CreateShow";
import ShowList from "./pages/admin/show/list/ShowList";
import EditShow from "./pages/admin/show/edit/EditShow";

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
      <Route
        path="/admin/hall/edit/:hallId"
        element={
          <ProtectedRoute>
            <EditHall />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/halls"
        element={
          <ProtectedRoute>
            <HallList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/movies"
        element={
          <ProtectedRoute>
            <MovieList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/movie/create"
        element={
          <ProtectedRoute>
            <CreateMovie />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/movie/edit/:movieId"
        element={
          <ProtectedRoute>
            <EditMovie />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/show/create"
        element={
          <ProtectedRoute>
            <CreateShow />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/shows"
        element={
          <ProtectedRoute>
            <ShowList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/show/edit/:showId"
        element={
          <ProtectedRoute>
            <EditShow />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
