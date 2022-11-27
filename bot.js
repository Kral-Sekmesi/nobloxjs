const express = require("express");
const app = express();

app.listen(3000, () => {

 console.log("Project is running!");
})

app.get("/", (req, res) => {
 res.send("Hello!");
})


  const Noblox = require("noblox.js");
  var cookie = "";
  console.log("Successfully login roblox account");
  console.log("Roblox Account Status: online!");
  const Mod = require("./mod.js");
  const Link = require("./link.js");
  const Config = require("./config.json");
  const AutoMod = require("./automod.js");
