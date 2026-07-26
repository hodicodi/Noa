import { USERS_PATH } from "@shared/src/const/paths.const.ts";
import { User, UserRes } from "@shared/src/types/user.type.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { AxiosResponse } from "axios";
import { useAuth } from "../auth/AuthContext.tsx";

export const USE_USER_BY_TZ = "userByTz";

const getUserByTz = async (tz: string): Promise<AxiosResponse<UserRes, any, {}>> => {
  const response = await API.get<UserRes>(USERS_PATH + `/${tz}`, { params: { tz } });
  return response;
};

export const useUserByTz = () => {
  const { authUser } = useAuth();
  const userId = authUser!.email!.slice(0, 9);

  return useQuery<AxiosResponse<UserRes, any, {}>>({
    queryKey: [USE_USER_BY_TZ],
    queryFn: () => getUserByTz(userId),
  });
};
