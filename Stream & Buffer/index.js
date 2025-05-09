const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Form</title></head></html>");
    res.write(
      '<body><form method="post" action="/process"><input  name="message" /></form></body>'
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("stream finished");
      const parsedData = Buffer.concat(body).toString();
      console.log(parsedData);
      res.write("thank you for submitting!");
      res.end();
    });
  } else {
    res.write("404 Not Found");
    res.end();
  }
});
server.listen(5000);
console.log("Server is running on port 5000");

// const fs = require("fs");

// const bigStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf8");
// bigStream.on("data", (data) => {
//   console.log(data);
// });

// console.log("hello world!");
