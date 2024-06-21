const path = require("path");

module.exports = {
  pageExtensions: ["jsx", "js"],
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};
