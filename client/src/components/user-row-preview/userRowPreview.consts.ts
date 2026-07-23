import { User } from "@shared/src/types/user.type.ts";
import { Control, FieldValues } from "react-hook-form";

export type userRowPreviewProps = {
  user: User;
  toggleEditMode: () => void;
};
