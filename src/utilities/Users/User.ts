import { TUserModel } from "./Models/UserModel";

const storage = localStorage;

const users = JSON.parse(storage.getItem("users") ?? JSON.stringify([]));

const userExists = (username: string) => {
  const exists = users.filter((user: TUserModel) => user.username === username);

  return exists;
};

const saveUser = (user: TUserModel) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exists = userExists(user.username);

      if (exists.length > 0) {
        reject("User already exists");
        return;
      }

      const newUsers = [...users, user];

      storage.setItem("users", JSON.stringify(newUsers));

      resolve({
        error: false,
        data: user,
        message: "",
      });
    }, 300);
  });
};

const signin = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    // find user
    let user = users.find((user: TUserModel) => user.username === username)

    if (user) {
      // check password

      if(user.password === password) {
        resolve({
          error: false,
          message: '',
          data: user
        })
      } else {
        reject({
          error: true,
          message: 'Username or password is wrong',
          data: []
        })
        return;
      }

    } else {
      reject({
        error: true,
        message: 'Username or password is wrong',
        data: []
      })
      return;
    }

  })
}

const Users = {
  saveUser,
  signin
};

export default Users;
