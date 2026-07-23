import {
    USERS_PATH
} from "@shared/src/const/paths.const.ts";
import { User, UsersRes } from "@shared/src/types/user.type.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

export const USE_USERS_FILTER_KEY = "user";

const getUserFilterQuery = async (searchQuery: string): Promise<User[] | null> => {
  const response = await API.get<UsersRes>(USERS_PATH + '/search', {
    params: { searchQuery: searchQuery },
  });
  return response.data?.users ?? [];
};

export const useUserFilterQuery = (searchQuery: string) => {
  return useQuery<User[] | null, Error>({
    queryKey: [USE_USERS_FILTER_KEY, searchQuery],
    queryFn: () => getUserFilterQuery(searchQuery),
  });
};

