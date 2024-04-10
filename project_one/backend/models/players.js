const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defining out Schema structure.

const playerSchema = new Schema(
  {
    player_email: {
      type: String,
      required: true,
    },
    player_phone: {
      type: Number,
      required: true,
    },
    player_marchandize: {
      type: String,
    },
  },
  { timestamps: true }
);

const PlayerModel = mongoose.model("player", playerSchema);
module.exports = PlayerModel;
