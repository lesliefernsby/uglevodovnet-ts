
export type TUser = {
  login: string,
  firstName?: string,
  middleName?: string,
  lastName?: string,
  roles: string[],
  tokens: {
    accessToken: string,
    refreshToken: string
  }
}
