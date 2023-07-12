import { Routes, Route } from "react-router-dom";

import MessageEdit from "../pages/message-edit";
import MessageCreate from "../pages/message-create";
import MessageDelete from "../pages/message-delete";

import DashboardGrid from "../components/dashboard-grid";

import CreateGroup from "../pages/group/create-group";
import EditGroup from "../pages/group/edit-group";
import Group from "../pages/group/group";

const routes = [
  // { headName: "home", path: "/", element: <Dashboard /> },
  { headName: "dashboard", path: "/", element: <DashboardGrid /> },
  { headName: "create", path: "/create", element: <MessageCreate /> },
  { headName: "edit", path: "/edit", element: <MessageEdit /> },
  { headName: "delete", path: "/delete", element: <MessageDelete /> },
  {
    headName: "group",
    path: "/group",
    element: <Group />,
  },
  {
    headName: "creategroup",
    path: "/creategroup",
    element: <CreateGroup />,
  },
  {
    headName: "editgroup",
    path: "/editgroup",
    element: <EditGroup />,
  },
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
