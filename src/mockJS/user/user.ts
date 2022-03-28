import Mock from "mockjs";

const Random = Mock.Random;

interface IUser {
  date: string;
  name: string;
  address: string;
  age: number;
  status: number;
}

function userData(): Array<IUser> {
  const usersList: Array<IUser> = Mock.mock({
    "data|8": [
      {
        date: "@date('yyyy-MM-dd HH:mm:ss')",
        name: "@cname",
        address: Random.county(true),
        "status|0-1": 1,
        "age|18-100": 1,
      },
    ],
  });
  return usersList;
}

export { userData };
