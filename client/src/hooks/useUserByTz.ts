import { USERS_PATH } from "@shared/src/const/paths.const.ts";
import { User, UserRes } from "@shared/src/types/user.type.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { AxiosResponse } from "axios";
import { useAuth } from "../auth/AuthContext.tsx";

export const USE_USER_BY_TZ = "userByTz";

const getUserByTz = async (tz: string): Promise<User | null> => {
  const response = await API.get<UserRes>(`${USERS_PATH}/${tz}`, { params: { tz: tz } });
  return response.data.user;
};

export const useUserByTz = () => {
  const { authUser } = useAuth();
  const userId = authUser!.email!.split('@')[0] ?? '';;

  return useQuery<User | null>({
    queryKey: [USE_USER_BY_TZ],
    queryFn: () => getUserByTz(userId),
  });
};
