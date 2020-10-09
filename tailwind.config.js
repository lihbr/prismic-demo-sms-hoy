module.exports = {
  target: "ie11",
  prefix: "",
  important: false,
  separator: ":",
  theme: {},
  variants: {},
  purge: {
    content: ["app/prismic/**/*.vue"]
  },
  plugins: [
    ({ addBase, addUtilities, theme }) => {
      const objectFitUtilities = {
        ".object-cover": {
          objectFit: "cover",
          fontFamily: '"object-fit: cover"' // eslint-disable-line
        },
        ".object-contain": {
          objectFit: "contain",
          fontFamily: '"object-fit: contain"' // eslint-disable-line
        }
      };
      addUtilities(objectFitUtilities, {
        variants: ["responsive"]
      });
    }
  ]
};
