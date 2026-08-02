import { FC } from "react";
import { useAuth } from "../auth/AuthContext.tsx";
import { DrawerProvider } from "../components/song-drawer/DrawerContext.tsx";
import UserLayout from "./UserLayout.tsx";

const RootLayout: FC = () => {
  const { user, logout } = useAuth();

  return (
    <DrawerProvider>
      <UserLayout />
    </DrawerProvider>
  );
};

export default RootLayout;
