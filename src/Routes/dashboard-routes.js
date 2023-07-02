import Dashboard from "../components/dashboard";
import { Routes, Route } from "react-router-dom";
import { theme } from "../units/theme";
import ProcessCreate from "../components/process-create";

const routes = [
  // { headName: "home", path: "/", element: <Dashboard /> },
  { headName: "create", path: "/create", element: <ProcessCreate /> },
];

export const DashboardRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <>
          <Route element={route.element} path={route.path} />
          <Route element={<ProcessCreate />} path="/create" />
        </>
      ))}
    </Routes>
  );
};
