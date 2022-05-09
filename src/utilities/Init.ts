const storage = localStorage;

const createUserTable = () => {
  // check is user table is already created
  let userTable = localStorage.getItem("users");

  if (!userTable) {
    storage.setItem("users", JSON.stringify([]));
  }
};

const createDatabase = () => {
  createUserTable();
};

const Init = {
  createDatabase,
};

export default Init;
