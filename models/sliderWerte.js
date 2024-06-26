const mongoose = require("mongoose");

const sliderWerteSchema = new mongoose.Schema({
  slider1: Number,
  slider2: Number,
  slider3: Number,
  slider4: Number,
  slider5: Number,
  slider6: Number,
});

module.exports = mongoose.model("SliderWerte", sliderWerteSchema);

