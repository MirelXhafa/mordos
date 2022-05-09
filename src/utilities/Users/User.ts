import { TUserModel } from "./Models/UserModel";

const storage = localStorage;

const users = JSON.parse(storage.getItem("users") ?? JSON.stringify([]));

const userExists = (username: string) => {
  const exists = users.filter((user: TUserModel) => user.username === username);

  return exists;
};

// const saveUser = (user: TUserModel) => {
//   try {
//     if (userExists(user.username).length === 0) {
//       const newUsers = [...users, user];

//       storage.setItem("users", JSON.stringify(newUsers));

//       setTimeout(() => {
//         return {
//           error: false,
//           data: user,
//           message: "",
//         };
//       }, 500);
//     } else {
//       throw new Error("User already exists");
//     }
//   } catch (e) {
//     throw new Error("e: " + e);
//   }
// };

const saveUser = (user: TUserModel) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exists = userExists(user.username);

      console.log("exists: ", exists);

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

const Users = {
  saveUser,
};

export default Users;
