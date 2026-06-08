import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  fetchCurrentUser,
  loginWithMicrosoft,
  logout as logoutRequest,
  type AuthUser,
} from "../services/auth.service";

type Status = "loading" | "authenticated" | "unauthenticated";

interface AuthCtx {
  status: Status;
  user: AuthUser | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

const Ctx = createContext<AuthCtx | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  const refresh = useCallback(async () => {
    try {
      const me = await fetchCurrentUser();
      setUser(me);
      setStatus(me ? "authenticated" : "unauthenticated");
    } catch {
      setUser(null);
      setStatus("unauthenticated");
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const value = useMemo<AuthCtx>(
    () => ({
      status,
      user,
      refresh,
      login: loginWithMicrosoft,
      logout: logoutRequest,
    }),
    [status, user, refresh],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useAuth = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used inside <AuthProvider>");
  return c;
};