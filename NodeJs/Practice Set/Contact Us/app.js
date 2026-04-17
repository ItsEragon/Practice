// External Module
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send("Hello World from /");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`<h1>Please enter your details here<h1>
    <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Enter your name">
        <input type="email" name="email" placeholder="Enter your email">
        <input type="submit">
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  res.send("Thanks for your details");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
