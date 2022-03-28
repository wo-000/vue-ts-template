interface Ilogininfo {
  id: number;
  isAdmin: boolean;
  username: string;
  password: string;
}

function getUserInfo(): Array<Ilogininfo> {
  const loginInfo: Array<Ilogininfo> = [
    {
      id: 1,
      isAdmin: true,
      username: "admin",
      password: "admin",
    },
    {
      id: 2,
      isAdmin: false,
      username: "游客",
      password: "123456",
    },
  ];
  return loginInfo;
}
export { getUserInfo };
