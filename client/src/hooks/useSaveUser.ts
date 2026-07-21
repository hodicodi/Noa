import { SaveUser, User, UserRes } from "@shared/src/types/user.type.ts";
import { API } from "../api/services/albumService.ts";
import { USERS_PATH } from "@shared/src/const/paths.const.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const saveUser = async (userData: SaveUser): Promise<User | null> => {
  const response = await API.post<UserRes>(USERS_PATH, { user: userData });
  return response.data?.user;
};

export const useSaveUser = (toggleEditMode: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (currentUser: SaveUser) =>  saveUser(currentUser),
    onSuccess: async() => {
      toggleEditMode();
      await queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
