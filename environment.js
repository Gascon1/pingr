const path = require("path");
console.log("path", path)

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "../.env." + ENV);
console.log("path2", PATH)

require("dotenv").config({ path: PATH });
console.log("ENV", ENV);
module.exports = ENV;

