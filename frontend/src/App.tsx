import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { AppRouter } from "./routes/AppRouter";

export const App: React.FC = () => {
  return (
    <AppContext.Provider value={{ session: useValue(undefined) }}>
      <RouterProvider router={AppRouter} />
    </AppContext.Provider>
  );
};
