const Link = require("../models/linkModel");

async function handleHomeValidUser(req, res) {
  const user = req.user;
  return res.status(200).json({ message: "valid user", user });
}

async function handleAddLinks(req, res) {
  const { linkData, createdBy } = req.body;
  const { description, title, link } = linkData;

  try {
    const userLink = await Link.findOne({ createdBy });

    if (!userLink) {
      return res.status(400).json({ message: "User not found" });
    }

    userLink.linkData.push({ description, title, link });
    await userLink.save();

    res.status(200).json({ message: "Link added successfully" });
  } catch (error) {
    console.error("Error adding link:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function handleData(req, res) {
  const { userId } = req.query;

  try {
    const userLink = await Link.findOne({ createdBy: userId });

    if (!userLink) {
      return res.status(400).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "Link data fetched successfully", user: userLink });
  } catch (error) {
    console.error("Error fetching link data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { handleHomeValidUser, handleAddLinks, handleData };
