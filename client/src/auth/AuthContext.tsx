import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { fetchCurrentUser, loginWithMicrosoft, logout as logoutRequest, type AuthUser } from "../services/auth.service.ts";
import { User } from "@shared/src/types/user.type.ts";

type Status = "loading" | "authenticated" | "unauthenticated";

interface AuthCtx {
  status: Status;
  authUser: AuthUser | null;
  user: User | null;
  changeUser: (user: User) => void;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

const Ctx = createContext<AuthCtx | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [user, setUser]  = useState<User | null>(null);

  const refresh = useCallback(async () => {
    try {
      const me = await fetchCurrentUser();
      setAuthUser(me);
      setStatus(me ? "authenticated" : "unauthenticated");
    } catch {
      setAuthUser(null);
      setStatus("unauthenticated");
    }
  }, []);

  const changeUser = (user: User) => {
    setUser(user);
  }

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const value = useMemo<AuthCtx>(
    () => ({
      status,
      authUser,
      user,
      changeUser,
      refresh,
      login: loginWithMicrosoft,
      logout: logoutRequest,
    }),
    [status, authUser, refresh],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useAuth = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used inside <AuthProvider>");
  return c;
};
