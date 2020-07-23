const defaultsDeep = require("lodash.defaultsdeep");

const hoyTailwindConfig = require("./tailwind.config.js");

const withHOY = userTailwindConfig =>
  defaultsDeep(userTailwindConfig, hoyTailwindConfig);

module.exports = withHOY;
