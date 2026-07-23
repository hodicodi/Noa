import { UserRegistrationInput } from "@shared/src/schemas/userValidation.schema.ts";
import { User } from "@shared/src/types/user.type.ts";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";

export type userRowFormProps = {
  user: User;
  onSubmit: (formData: UserRegistrationInput) => void;
  handleSubmit: (
    onValid: SubmitHandler<UserRegistrationInput>,
    onInvalid?:
      | SubmitErrorHandler<UserRegistrationInput>
      | undefined,
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
};
