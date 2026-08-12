// Core Module
const path = require("path");

// External Module
const express = require("express");

// Local Module
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
