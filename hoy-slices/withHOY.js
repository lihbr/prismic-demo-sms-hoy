const defu = require("defu");

const hoyTailwindConfig = require("./tailwind.config.js");

const withHOY = userTailwindConfig =>
  defu.arrayFn(userTailwindConfig, hoyTailwindConfig);

module.exports = withHOY;
