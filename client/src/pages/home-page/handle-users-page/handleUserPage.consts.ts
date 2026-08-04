import { User } from "@shared/src/types/user.type.ts";

const NEW_USER_DEFULT_VALUES: User = {
  isAdministor: false,
  name: "",
  tz: "",
  createDate: new Date(),
  deleteDate: null,
};

const COLUMN_NAMES = ["Name", "Tz", "Is administor"];

export {NEW_USER_DEFULT_VALUES, COLUMN_NAMES};
