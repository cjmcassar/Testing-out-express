const express = require("express");

const app = express();

app.get("/", function(req, res)
{
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res)
{
  res.send("Contact me at: myemail@myemail.com");
});

app.get("/about", function(req, res)
{
  res.send("Here is a lot of stuff about me");
});

app.get("/hobbies", function(req, res)
{
  res.send("Chilling");
});

app.listen(3000, function()
{
  console.log("Server started on port 3000");
});
