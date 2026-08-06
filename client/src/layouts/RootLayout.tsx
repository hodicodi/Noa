import { FC } from "react";
import { DrawerProvider } from "../components/song-drawer/DrawerContext.tsx";
import UserLayout from "./UserLayout.tsx";

const RootLayout: FC = () => {
  return (
    <DrawerProvider>
      <UserLayout />
    </DrawerProvider>
  );
};

export default RootLayout;
