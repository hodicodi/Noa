import { AuthStatus } from "@shared/Enums.ts";
import { User } from "@shared/src/types/user.type.ts";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { fetchCurrentUser, loginWithMicrosoft, logout as logoutRequest, type AuthUser } from "../services/auth.service.ts";

interface AuthCtx {
  status: AuthStatus;
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
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.Loading);
  const [user, setUser] = useState<User | null>(null);

  // TODO: move to a hook
  const refresh = useCallback(async () => {
    try {
      const currentUser = await fetchCurrentUser();
      setAuthUser(currentUser);
      setStatus(currentUser ? AuthStatus.Authenticated : AuthStatus.Unauthenticated);
    } catch {
      setAuthUser(null);
      setStatus(AuthStatus.Unauthenticated);
    }
  }, []);

  const changeUser = (user: User) => {
    setUser(user);
  };

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
