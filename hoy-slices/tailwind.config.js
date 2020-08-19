/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: {
    content: ["node_modules/hoy-slices/**/*.vue"]
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
    fontFamily: {
      main: [
        "Source Sans Variable",
        "Helvetica Neue",
        "Helvetica",
        "Apple Color Emoji",
        "Arial",
        "sans-serif"
      ]
    },
    colors: {
      transparent: "transparent",
      black: {
        default: "#222222"
      },
      white: {
        default: "#ffffff"
      },
      purple: {
        default: "#6232c9"
      },
      blue: {
        default: "#234ee8"
      },
      cyan: {
        default: "#23c4e8"
      },
      orange: {
        default: "#e87b7b"
      },
      beige: {
        default: "#fff5ca"
      }
    },
    fontSize: {
      "3xs": "0.5rem", //   8px
      "2xs": "0.625rem", // 10px
      xs: "0.75rem", //     12px
      s: "0.875rem", //     14px*
      m: "1rem", //         16px*
      l: "1.125rem", //     18px*
      xl: "1.25rem", //     20px*
      "2xl": "1.375rem", // 22px*
      "3xl": "1.625rem", // 26px*
      "4xl": "2rem", //     32px*
      "5xl": "2.25rem", //  36px*
      "6xl": "2.75rem", //  44px*
      "7xl": "3.25rem", //  52px*
      "8xl": "4rem", //     64px*
      "9xl": "4.5rem", //   72px
      "10xl": "5rem" //     80px
    },
    extend: {
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem"
      },
      boxShadow: {
        "2xl": "2rem 2rem 5rem rgba(0, 0, 0, 0.1)"
      }
    }
  },
  variants: {}
};
