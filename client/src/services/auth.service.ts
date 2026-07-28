import { useQuery } from "@tanstack/react-query";
import { api } from "./http.ts";

export interface AuthUser {
  uniqueId: string;
  azureId: string;
  tenantId: string;
  name?: string;
  email?: string;
  roles: string[];
  isApp: boolean;
}

const USE_CURRENT_USER = "useCurrentUser";

export async function getCurrentUser(): Promise<AuthUser | null> {
  // try {
  const res = await api.get<{ user: AuthUser }>("/protected/user-info");
  return res.data.user;
  // } catch (err: any) {
  //   if (err?.response?.status === 401 || err?.response?.status === 403)
  //     return null;
  //   throw err;
  // }
}

export const useCurrentUser = () => useQuery({ queryFn: getCurrentUser, queryKey: [USE_CURRENT_USER] });

export async function loginWithMicrosoft() {
  const { data } = await api.post<{ url: string }>("/auth/authenticate", {});
  window.location.href = data.url; // browser → Microsoft
}

export async function logout() {
  const { data } = await api.post<{ url: string }>("/auth/logout", {});
  window.location.href = data.url; // clears cookies + Microsoft logout
}
