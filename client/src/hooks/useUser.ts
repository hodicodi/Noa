import { User, UserParams, UserRes, UsersRes } from "@shared/src/types/user.type.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { useParams } from "react-router-dom";

const getAllUsers = async (): Promise<User[] | null> => {
  const response = await API.get<UsersRes>(`/users/`);
  return response.data?.users ?? [];
};

const patchUser = async (tz: string, userData: Partial<User>): Promise<User | null> => {
  const response = await API.patch<UserRes>(`/users/${tz}`, userData, { params: { tz } } );
  return response.data?.user;
};


export const useUsers = () => {
  return useQuery<User[] | null, Error>({
    queryKey: ["users"],
    queryFn: getAllUsers, 
  });
};

export const usePatchUser = (tz: string, userData: Partial<User>) => {
  return useQuery<User | null, Error>({
    queryKey: ["users"],
    queryFn: () => patchUser(tz, userData), 
    enabled: !!tz,
  });
};