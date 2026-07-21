import { createBrowserRouter } from "react-router-dom";
import {HOME, PLAYLIST, ADMINISTOR, HADNLE_USERS} from "./path.constants.ts";
import RootLayout from "../layouts/RootLayout.tsx";
import HomePage from "../pages/home-page/home-page/HomePage.tsx";
import PlaylistPage from "../pages/home-page/playlist-page/PlaylistPage.tsx";
import AdministorPage from "../pages/home-page/administor-page/administorPage.tsx";
import AdministorLayout from "../layouts/AdministorLayout.tsx";
import HandleUsersPage from "../pages/home-page/handle-users-page/handleUsersPage.tsx";

const router = createBrowserRouter([
  {
    path: HOME,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: PLAYLIST, element: <PlaylistPage /> },
    ],
  },
  {
    path: "/",
    element: <AdministorLayout />,
    children: [
      { path: ADMINISTOR, element: <AdministorPage /> },
      { path: HADNLE_USERS, element: <HandleUsersPage /> },
    ],
  },
]);

export default router;
