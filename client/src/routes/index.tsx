import { createBrowserRouter } from "react-router-dom";
import {HOME_PATH, PLAYLIST_PATH, ADMINISTOR_PATH, HADNLE_USERS_PATH} from "./path.constants.ts";
import RootLayout from "../layouts/RootLayout.tsx";
import HomePage from "../pages/home-page/home-page/HomePage.tsx";
import PlaylistPage from "../pages/home-page/playlist-page/PlaylistPage.tsx";
import AdministorPage from "../pages/home-page/administor-page/administorPage.tsx";
import AdministorLayout from "../layouts/AdministorLayout.tsx";
import HandleUsersPage from "../pages/home-page/handle-users-page/handleUsersPage.tsx";

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: PLAYLIST_PATH, element: <PlaylistPage /> },
    ],
  },
  {
    path: "/",
    element: <AdministorLayout />,
    children: [
      { path: ADMINISTOR_PATH, element: <AdministorPage /> },
      { path: HADNLE_USERS_PATH, element: <HandleUsersPage /> },
    ],
  },
]);

export default router;
