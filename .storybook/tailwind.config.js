const defu = require("defu");
const defaultTailwindConfig = require("@nuxtjs/tailwindcss/lib/files/tailwind.config");
const hoyTailwindConfig = require("hoy-slices/tailwind.config");

module.exports = defu.arrayFn(hoyTailwindConfig, defaultTailwindConfig);
