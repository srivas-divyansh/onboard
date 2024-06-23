const path = require("path");

module.exports = {
  pageExtensions: ["jsx", "js"],
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  i18n: {
    locales: ["en", "hi", "mr"],
    defaultLocale: "en",
  },
};
