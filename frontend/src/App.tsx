import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

export const App: React.FC = () => {
  return <RouterProvider router={AppRouter} />;
};
