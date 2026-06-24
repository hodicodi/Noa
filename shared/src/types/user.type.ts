export type User = {
  uuid: string
  isAdministor: boolean;
  name: string;
  tz: string;
}

export type UserRes = {
  user: User | null
}

export type UserParams = {
  tz: string;
}

export type UsersRes = {
  users: User[] | null
}

export type SaveUserReqBody = {
  user: SaveUser;
}

export type SaveUser = {
  isAdministor: boolean;
  name: string;
  tz: string;
}