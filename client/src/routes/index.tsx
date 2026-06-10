import { createBrowserRouter } from "react-router-dom";
import PathConstants from "./pathConstants";
import RootLayout from "../layouts/RootLayout";

// Pages
import HomePage from "../pages/home-page/home-page/HomePage";
import PlaylistPage from "../pages/home-page/playlist-page/playlistPage";


const router = createBrowserRouter([
    {
        path: PathConstants.HOME,
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage/> }, // Matches "/"
             { path: PathConstants.PLAYLIST, element: <PlaylistPage /> }
        ],
    },
]);

//             { path: PathConstants.ABOUT, element: <About /> },

export default router;
