import { User } from "@shared/src/types/user.type.ts";

export type handleUserRowProps = {
  user: User;
  edit: boolean;
};

export const formDefaultValues = {
    name: "", tz: "", isAdministor: false
  }