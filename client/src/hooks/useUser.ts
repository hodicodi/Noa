import {
  USERS_PATH
} from "@shared/src/const/paths.const.ts";
import { SaveUser, User, UserRes, UsersRes } from "@shared/src/types/user.type.ts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

const getAllUsers = async (): Promise<User[] | null> => {
  const response = await API.get<UsersRes>(USERS_PATH);
  return response.data?.users ?? [];
};

export const useUsers = () => {
  return useQuery<User[] | null, Error>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
};

