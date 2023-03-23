const {
  getAccountData,
  saveAccountData,
  searchAccountData,
  deleteAccountData,
  updateAccountData,
} = require("../utils/function/function.js");

const getData = (req, res) => {
  try {
    let accountData = getAccountData();

    res.status(200).json({
      message: "Succes",
      data: accountData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const searchData = (req, res) => {
  try {
    let data = searchAccountData(req.params.account);
    res.status(200).json({
      message: "Succes",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const postData = (req, res) => {
  try {
    const dataInput = req.body;

    console.log(dataInput);
    let generateId = Math.floor(Math.random() * 11);
    let data = {
      id: generateId,
      username: dataInput.username,
      email: dataInput.email,
      password: dataInput.password,
    };
    saveAccountData(data);
    res.status(200).json({
      message: "Succes",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteData = (req, res) => {
  try {
    let id = req.params.id;

    deleteAccountData(Number(id));

    res.status(200).json({
      message: "Succes",
      data: id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateData = (req, res) => {
  try {
    let id = req.params.id;
    let dataInput = req.body;

    console.log(dataInput);
    updateAccountData(Number(id), dataInput);
    res.status(200).json({
      message: "Success updated Data!",
      data: id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getData,
  searchData,
  postData,
  deleteData,
  updateData,
};
