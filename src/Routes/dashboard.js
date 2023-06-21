import Dashboard from "../components/dashboard";
import { Routes, Route } from "react-router-dom";

const routes = [{ headName: "home", path: "/", element: <Dashboard /> }];

export const DashboardRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <>
          <Route element={route.element} path={route.path} />
        </>
      ))}
    </Routes>
  );
};
