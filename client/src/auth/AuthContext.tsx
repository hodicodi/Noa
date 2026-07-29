import { User } from "@shared/src/types/user.type.ts";
import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useUserByTz } from "../hooks/useUserByTz.ts";
import { loginWithMicrosoft, logout as logoutRequest, useCurrentUser, type AuthUser } from "../services/auth.service.ts";

type AuthCtx = {
  authUser: AuthUser | null;
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const Ctx = createContext<AuthCtx | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: authUser = null, isLoading: isLoadingAuthUser } = useCurrentUser();
  const userTz = authUser?.email?.split("@")?.[0] ?? "";
  const { data: user = null, isLoading: isLoadingUser } = useUserByTz(userTz);

  const value = useMemo<AuthCtx>(
    () => ({
      authUser,
      user,
      login: loginWithMicrosoft,
      logout: logoutRequest,
      isLoading: isLoadingAuthUser || isLoadingUser,
    }),
    [authUser, user, loginWithMicrosoft, logoutRequest, isLoadingAuthUser, isLoadingUser],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useAuth = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used inside <AuthProvider>");
  return c;
};
