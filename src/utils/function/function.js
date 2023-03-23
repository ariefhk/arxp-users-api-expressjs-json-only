const path = require("path");
const dir = path.resolve();
const dataPath = path.join(dir, "src", "utils", "data", "useraccount.json");
const fs = require("fs");

// Utils Function
const saveAccountData = (data) => {
  let datas = {
    id: data.id,
    username: data.username,
    email: data.email,
    password: data.password,
  };

  let dataNew = JSON.parse(fs.readFileSync(dataPath));
  dataNew.push(datas);

  const stringifyData = JSON.stringify(dataNew);
  fs.writeFileSync(dataPath, stringifyData);
};

const getAccountData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

const searchAccountData = (account) => {
  const accounts = JSON.parse(fs.readFileSync(dataPath));

  return accounts.filter((acc) => acc.username.includes(account.toLowerCase()));
};

const deleteAccountData = (id) => {
  const accounts = JSON.parse(fs.readFileSync(dataPath));
  const newData = accounts.filter((acc) => acc.id !== id);
  console.log(newData);
  const stringifyData = JSON.stringify(newData);
  fs.writeFileSync(dataPath, stringifyData);
};

const updateAccountData = (id, data) => {
  const accounts = JSON.parse(fs.readFileSync(dataPath));
  const newData = accounts.map((acc) =>
    acc.id === id ? { ...acc, ...data } : acc
  );

  const stringifyData = JSON.stringify(newData);
  fs.writeFileSync(dataPath, stringifyData);
};

module.exports = {
  saveAccountData,
  getAccountData,
  searchAccountData,
  saveAccountData,
  deleteAccountData,
  updateAccountData,
};
