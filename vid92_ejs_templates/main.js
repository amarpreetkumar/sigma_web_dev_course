const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //     //this is serving the index.html file from the templates directory
  //   res.render(__dirname + '/templates/index.html',{
  //       sitename,searchtext
  //   })

  let sitename = "My Website";
  let searchtext = "Text...";
  // This is a simple example of how you might use variables in your HTML
  // This is a simple example of how you might use variables in your HTML
  let arr = [1, 2, 3, 4, 5];

  res.render("index", {
    sitename: sitename,
    searchtext: searchtext,
    arr: arr,
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogtitle = "My blog";
  let blogcontent = "Searchpost content goes here";
  // This is a simple example of how you might use variables in your HTML
  //render is used to render a template file with variables
  res.render("blogpost", {
    blogtitle: blogtitle,
    blogcontent: blogcontent,
  });

  //blogtitle as blogtitle variable
  //blogcontent as blogcontent variable
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//ejs documenttaion
//https://github.com/mde/ejs/wiki/Using-EJS-with-Express


