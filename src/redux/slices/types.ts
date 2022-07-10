export type TUser = {
  login: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  roles: string[];
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

export type TUserError = {
  detail: string;
  status: number;
  title: string;
  type: string;
};
