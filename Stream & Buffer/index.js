const fs = require("fs");

const bigStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf8");
bigStream.on("data", (data) => {
  console.log(data);
});
