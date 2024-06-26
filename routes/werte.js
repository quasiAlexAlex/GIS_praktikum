const express = require("express");
const router = express.Router();
const SliderWerte = require("../models/sliderWerte");

// Anzahl der zu behaltenden Datensätze
const MAX_RECORDS = 1;

// Neueste Slider-Werte abrufen
router.get("/", async (req, res) => {
  try {
    const sliderWerte = await SliderWerte.findOne().sort({ _id: -1 });
    res.json(sliderWerte);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Neue Slider-Werte erstellen
router.post("/", async (req, res) => {
  const sliderWerte = new SliderWerte({
    slider1: req.body.slider1,
    slider2: req.body.slider2,
    slider3: req.body.slider3,
    slider4: req.body.slider4,
    slider5: req.body.slider5,
    slider6: req.body.slider6,
  });

  try {
    const newSliderWerte = await sliderWerte.save();
    res.status(201).json(newSliderWerte);
    await cleanupOldRecords();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Funktion zum Löschen älterer Datensätze
async function cleanupOldRecords() {
  try {
    const count = await SliderWerte.countDocuments();
    if (count > MAX_RECORDS) {
      const excessRecords = count - MAX_RECORDS;
      const oldRecords = await SliderWerte.find().sort({ _id: 1 }).limit(excessRecords);
      const idsToDelete = oldRecords.map(record => record._id);
      await SliderWerte.deleteMany({ _id: { $in: idsToDelete } });
      console.log(`${excessRecords} alte Datensätze gelöscht`);
    }
  } catch (err) {
    console.error("Fehler beim Löschen alter Datensätze:", err.message);
  }
}

module.exports = router;
