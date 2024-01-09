import React, { lazy } from "react";
import type { FC } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));

export const AppRouter: FC = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
