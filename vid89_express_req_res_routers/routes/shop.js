const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("Shop home page");
});

// define the about route
router.get("/about", (req, res) => {
  res.send("About shop");
});

module.exports = router;

// //`module.exports = router` means you are exporting the `router` object from this file so it can be imported and used in other files.

// In your case, it allows you to use this router in your main app file like this:
// const shop = require('./routes/shop')


// Now, `shop` contains all the routes you defined on the `router` object in shop.js. This is how you share routes between files in Node.js and Express.
