// "use strict";
const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>This is Server Response in HTML");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is about page Server Response in HTML");
  } else if (req.url == "/hello") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on post ${port}`);
});
