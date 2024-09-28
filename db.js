const productsPLP = require("./data/productsPLP");
const courses = require("./data/courses");
const adImage = require("./data/adImage");
module.exports = () => {
  return {
    adImage,
    productsPLP,
    courses,
  };
};
