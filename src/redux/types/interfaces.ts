export interface UserData {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface StatusUser {
  name: string;
  isAuth: boolean;
}
