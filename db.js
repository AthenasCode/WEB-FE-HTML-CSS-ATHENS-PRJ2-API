const stakeholders = require("./data/stackeholders");
const productsPLP = require("./data/productsPLP");
const courses = require("./data/courses");

module.exports = () => {
  return {
    stakeholders,
    productsPLP,
    courses,
  };
};
