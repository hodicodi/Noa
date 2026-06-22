export type User = {
  uuid: string
  isAdministor: boolean;
  userName: string;
  id: string;
}

export type UserRes = {
  user: User | null
}

export type UserParams = {
  id: string;
}

export type UsersRes = {
  users: User[] | null
}

export type SaveUserReqBody = {
  isAdministor: boolean;
  userName: string;
  id: string;
}