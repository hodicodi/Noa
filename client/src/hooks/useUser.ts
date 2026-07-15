import { User, UsersRes } from "@shared/src/types/user.type.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

const getAllUsers = async (): Promise<User[] | null> => {
  console.log("in get all uses");
  const response = await API.get<UsersRes>(`/users/`);
  return response.data?.users ?? [];
};

export const useUsers = () => {
  console.log("in use users");
  return useQuery<User[] | null, Error>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
};
