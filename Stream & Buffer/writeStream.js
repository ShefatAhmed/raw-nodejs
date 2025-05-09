const fs = require("fs");
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);
// // ourReadStream.on("data", (chunk) => {
// //   ourWriteStream.write(chunk)
// // });
// ourReadStream.pipe(ourWriteStream)

const http = require("http");
const server = http.createServer((req, res) => {
    const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
    ourReadStream.pipe(res)
});
server.listen(5000);
console.log("Server is running on port 5000");