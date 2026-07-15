import { createBrowserRouter } from "react-router-dom";
import Path from "./path.constants.ts";
import RootLayout from "../layouts/RootLayout.tsx";
import HomePage from "../pages/home-page/home-page/HomePage.tsx";
import PlaylistPage from "../pages/home-page/playlist-page/PlaylistPage.tsx";
import AdministorPage from "../pages/home-page/administor-page/AdministorPage.tsx";
import AdministorLayout from "../layouts/AdministorLayout.tsx";
import HandleUsersPage from "../pages/home-page/handle-users-page/HandleUsersPage.tsx";
import EditUserForm from "../pages/home-page/edit-user-page/editUser.tsx";

const router = createBrowserRouter([
  {
    path: Path.Home,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: Path.Playlist, element: <PlaylistPage /> },
    ],
  },
  {
    path: "/",
    element: <AdministorLayout />,
    children: [
      { path: Path.Administor, element: <AdministorPage /> },
      { path: Path.HandleUser, element: <HandleUsersPage /> },
      { path: Path.EditUser, element: <EditUserForm /> },
    ],
  },
]);

export default router;
