import { createBrowserRouter } from "react-router-dom";
import Path from "./pathConstants.ts";
import RootLayout from "../layouts/RootLayout.tsx";

// Pages
import HomePage from "../pages/home-page/home-page/HomePage.tsx";
import PlaylistPage from "../pages/home-page/playlist-page/PlaylistPage.tsx";


const router = createBrowserRouter([
    {
        path: Path.HOME,
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage/> }, // Matches "/"
             { path: Path.PLAYLIST, element: <PlaylistPage /> }
        ],
    },
]);


export default router;
