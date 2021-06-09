const { Cidenet } = require("../db");

module.exports = async (req, res, next) => {
  const { firstName, otherName, firstLastName, secondLastName } = req.body.data;

  try {
    let data = await Cidenet.findOrCreate({
      where: {
        firstName,
        otherName,
        firstLastName,
        secondLastName
      },
    });

    return res.json(data);
  } catch (e) {
    next(e);
  }
};
