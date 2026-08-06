import { createTheme } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.tsx";

const AdministorLayout: FC = () => {
  const { user, logout } = useAuth();

  return <Outlet />;
};

export default AdministorLayout;
