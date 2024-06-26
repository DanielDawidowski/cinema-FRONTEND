import React from "react";
import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthTabs } from "./pages/auth";
import ForgotPassword from "./pages/auth/forgot-password/ForgotPassword";
import ResetPassword from "./pages/auth/reset-password/ResetPassword";
import Home from "./pages/home/Home";
// import ProtectedRoute from "./pages/admin/AdminRoute";
import CreateHall from "./pages/admin/hall/create/CreateHall";
import EditHall from "./pages/admin/hall/edit/EditHall";
import HallList from "./pages/admin/hall/list/HallList";
import MovieList from "./pages/admin/movie/list/MovieList";
import CreateMovie from "./pages/admin/movie/create/CreateMovie";
import EditMovie from "./pages/admin/movie/edit/EditMovie";
import CreateShow from "./pages/admin/show/create/CreateShow";
import ShowList from "./pages/admin/show/list/ShowList";
import EditShow from "./pages/admin/show/edit/EditShow";
import Booking from "./pages/booking/Booking";
import Cancel from "./pages/booking/checkout/Cancel";
import Success from "./pages/booking/checkout/Success";
import Movie from "./pages/movie/Movie";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking/:showId" element={<Booking />} />
      <Route path="/login" element={<AuthTabs />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/movie/:movieId" element={<Movie />} />
      <Route path="/admin/hall/create" element={<CreateHall />} />
      <Route path="/admin/hall/edit/:hallId" element={<EditHall />} />
      <Route path="/admin/halls" element={<HallList />} />
      <Route path="/admin/movies" element={<MovieList />} />
      <Route path="/admin/movie/create" element={<CreateMovie />} />
      <Route path="/admin/movie/edit/:movieId" element={<EditMovie />} />
      <Route path="/admin/show/create" element={<CreateShow />} />
      <Route path="/admin/shows" element={<ShowList />} />
      <Route path="/admin/show/edit/:showId" element={<EditShow />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  );
};
