import { Routes, Route } from "react-router-dom";

import MessageEdit from "../pages/message-edit";
import MessageCreate from "../pages/message-create";
import MessageDelete from "../pages/message-delete";

import DashboardGrid from "../components/dashboard-grid";
import DomainList from "../pages/domain/domain-list";

const routes = [
  // { headName: "home", path: "/", element: <Dashboard /> },
  { headName: "dashboard", path: "/", element: <DashboardGrid /> },
  { headName: "create", path: "/create", element: <MessageCreate /> },
  { headName: "edit", path: "/edit", element: <MessageEdit /> },
  { headName: "delete", path: "/delete", element: <MessageDelete /> },
  { headName: "domainlist", path: "/domainlist", element: <DomainList /> },
];

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
