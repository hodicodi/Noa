import { SaveUser, User, UserRes } from "@shared/src/types/user.type.ts";
import { API } from "../api/services/albumService.ts";
import { USERS_PATH } from "@shared/src/const/paths.const.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { USE_USERS_FILTER_KEY } from "./useUserFilterQuery.ts";

export const saveUser = async (userData: SaveUser): Promise<User | null> => {
  const response = await API.post<UserRes>(USERS_PATH, { user: userData });
  return response.data?.user;
};

export const useSaveUser = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (currentUser: SaveUser) =>  saveUser(currentUser),
    onSuccess: async() => {
      onSuccess();
      await queryClient.invalidateQueries({ queryKey: [USE_USERS_FILTER_KEY] });
    },
  });
};
