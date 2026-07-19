import { SaveUser, User, UserRes, UsersRes } from "@shared/src/types/user.type.ts";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

const getAllUsers = async (): Promise<User[] | null> => {
  const response = await API.get<UsersRes>(`/users/`);
  return response.data?.users ?? [];
};

export const saveUser = async (userData: Partial<SaveUser>): Promise<User | null> => {
  const response = await API.post<UserRes>(`/users`, {"user":userData} );
  return response.data?.user;
};

export const useUsers = () => {
  return useQuery<User[] | null, Error>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
};
