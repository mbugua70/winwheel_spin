const SegmentWheelModel = require("../models/SegmentWheel");

module.exports.segmentWheel_get_all = async (res, req) => {
  try {
    const segments = await SegmentWheelModel.find({});
    if (segments.length === 0) {
      return res
        .status(200)
        .json({ success: true, msg: "You have no segments" });
    }
    return res.status(200).json({ success: true, segments });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
