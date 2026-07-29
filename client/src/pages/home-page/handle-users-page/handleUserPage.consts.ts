import { User } from "@shared/src/types/user.type.ts";

    const newUser: User = {
      isAdministor: false,
      name: "",
      tz: "",
      createDate: new Date(),
      deleteDate: null,
    };

export default newUser;