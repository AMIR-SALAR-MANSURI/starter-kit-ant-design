import { Routes, Route } from "react-router-dom";
import ProcessCreate from "../pages/message-create";
import DashboardGrid from "../components/dashboard-grid";
import MessageCreate from "../pages/message-create";
import MessageEdit from "../pages/message-edit";
import MessageDelete from "../pages/messasge-delete";

const routes = [
  // { headName: "home", path: "/", element: <Dashboard /> },
  { headName: "dashboard", path: "/", element: <DashboardGrid /> },
  { headName: "create", path: "/create", element: <MessageCreate /> },
  { headName: "edit", path: "/edit", element: <MessageEdit /> },
  { headName: "delete", path: "/delete", element: <MessageDelete /> },
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
