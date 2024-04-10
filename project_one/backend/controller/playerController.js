const PlayerModel = require("../models/players");

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { player_email: "", player_phone: "", player_marchandize: "" };

  // validation errors
  if (err.message.includes("player validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.playerForm_post = async (req, res) => {
  const { player_email, player_phone, player_marchandize } = req.body;

  try {
    const player_id = await PlayerModel.create({
      player_email,
      player_phone,
      player_marchandize,
    });

    if (player_id) {
      res.status(200).json({ success: true, id: player_id._id });
    }
  } catch (err) {
    const error = handleErrors(err);
    res.status(400).json({ error });
  }
};
