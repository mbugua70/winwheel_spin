const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defining out Schema structure.

const segmentWheelSchema = new Schema(
  {
    fillStyle: {
      type: String,
      required: true,
    },
    text: {
      type: Number,
      required: true,
    },
    gift_number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const SegmentWheelModel = mongoose.model("segment_wheels", segmentWheelSchema);
module.exports = SegmentWheelModel;
