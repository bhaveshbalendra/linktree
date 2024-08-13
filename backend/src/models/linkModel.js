const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
  {
    linkData: [{ description: String, title: String, link: String }],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Link = mongoose.model("link", linkSchema);

module.exports = Link;
