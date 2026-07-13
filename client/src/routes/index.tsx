import { createBrowserRouter } from "react-router-dom";
import Path from "./path.constants.ts";
import RootLayout from "../layouts/RootLayout.tsx";
import HomePage from "../pages/home-page/home-page/HomePage.tsx";
import PlaylistPage from "../pages/home-page/playlist-page/PlaylistPage.tsx";
import AdministorPage from "../pages/home-page/administor-page/administorPage.tsx";

const router = createBrowserRouter([
  {
    path: Path.Home,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: Path.Playlist, element: <PlaylistPage /> },
      { path: Path.Administor, element: <AdministorPage /> },
    ],
  },
]);

export default router;
