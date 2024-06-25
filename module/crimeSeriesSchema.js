const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  episodeNum: {
    type: Number,
    required: true,
  },
  episodeName: {
    type: String,
    required: true,
  },
  episodeDescription: {
    type: String,
    required: true,
  },
  episodeDuration: {
    type: String,
    required: true,
  },
});
const seriesSchema = new mongoose.Schema({
  seriesName: {
    type: String,
    required: true,
  },

  releaseYear: {
    type: String,
    required: true,
  },
  numberofSeasons: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  starring: {
    type: [String],
    required: true,
  },
  episodes: [episodeSchema],
});

const seriesDB = mongoose.model("seriesdata", seriesSchema);
module.exports = seriesDB;
