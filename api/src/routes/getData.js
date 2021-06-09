const { Cidenet } = require("../db");

module.exports = async (req, res, next) => {
  try {
    let data = await Cidenet.findAll();

    return res.json(data);
  } catch (e) {
    next(e);
  }
};
