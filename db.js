const productsPLP = require("./data/productsPLP");
const linksbread = require("./data/linksbread");
const adImage = require("./data/adImage");
const menuItems = require("./data/menuItem");
const filterCategories = require("./data/filterCategories");
const homepageItems = require("./data/homepageItems");
const banner = require("./data/bannerhome");
module.exports = () => {
  return {
    adImage,
    linksbread,
    productsPLP,
    menuItems,
    filterCategories,
    homepageItems,
    banner
  };
};
