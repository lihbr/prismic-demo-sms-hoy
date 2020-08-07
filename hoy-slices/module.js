const defu = require("defu");
const hoyTailwindConfig = require("./tailwind.config");

module.exports = function (moduleOptions) {
  const options = {
    inject: true,
    ...moduleOptions
  };

  if (options.inject) {
    this.nuxt.hook("tailwindcss:config", function (tailwindConfig) {
      // Apply default
      const resolvedConfig = defu.arrayFn(tailwindConfig, hoyTailwindConfig);

      // Assign resolved config
      for (const key in resolvedConfig) {
        if (resolvedConfig.hasOwnProperty(key)) {
          tailwindConfig[key] = resolvedConfig[key];
        }
      }
    });
  }
};
