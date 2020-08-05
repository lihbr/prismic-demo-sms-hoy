const { envConfig } = require("./env.config");
const logger = require("consola").withScope("nuxt");

module.exports = async () => {
  // Configure application environment
  const env = envConfig(/* settings, CMS_GLOBAL */);

  return {
    /*
     ** Application mode
     */
    mode: "universal",

    /*
     ** Application target
     */
    target: "static",

    /*
     ** Head of the page, handled by head module
     */
    head: {},

    /*
     ** Customize the progress-bar color
     */
    loading: { color: env.APP_ACCENT_COLOR },

    /*
     ** Global CSS
     */
    css: ["~/assets/css/style.css"],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ["~/plugins/logger", "~/plugins/filters"],

    /*
     ** Nuxt.js modules
     */
    modules: [],

    /*
     ** Nuxt.js build modules
     */
    buildModules: [
      [
        "~/modules/head",
        {
          lang: env.APP_LANG,
          name: env.APP_NAME,
          description: env.APP_DESC,
          metaImage: {
            og: env.APP_METAIMG_OG,
            tw: env.APP_METAIMG_TW
          },
          twitterHandle: env.APP_TWITTER_HANDLE,
          backgroundColor: env.APP_BACKGROUND_COLOR,
          accentColor: env.APP_ACCENT_COLOR,
          titleFormat: env.APP_TITLE_FORMAT,
          url: env.APP_URL
        }
      ],
      "@nuxtjs/eslint-module",
      "@nuxtjs/global-components",
      "@nuxtjs/sitemap",
      ["@nuxtjs/netlify-files", { existingFilesDirectory: __dirname }],
      [
        "@nuxtjs/gtm",
        {
          id: env.GTM_ID,
          pageTracking: true,
          pageViewEventName: "nuxtRoute",
          respectDoNotTrack: env.GTM_FRIENDLY,
          enabled: !env.DEV
        }
      ],
      [
        "@nuxtjs/pwa",
        {
          workbox: {
            offlineAnalytics: !!env.GTM_ID && true,
            // Register image CDN here
            runtimeCaching: [
              // {
              //   urlPattern: `https://example.com/.*`
              // }
            ]
          },
          meta: false,
          icon: {
            accessibleIcons: false
          },
          manifest: {
            // display: "browser", // disable "Add to Home Screen" button
            lang: env.APP_LANG,
            name: env.APP_NAME,
            short_name: env.APP_NAME,
            description: env.APP_DESC,
            background_color: env.APP_BACKGROUND_COLOR,
            theme_color: env.APP_ACCENT_COLOR
          }
        }
      ],
      [
        "@nuxtjs/tailwindcss",
        {
          configPath: "~~/tailwind.config.js",
          cssPath: "~/assets/css/style.css"
        }
      ],
      [
        "@nuxtjs/prismic",
        {
          endpoint: "https://200629-sms-hoy.prismic.io/api/v2",
          apiOptions: {
            routes: [
              {
                type: "page",
                path: "/:uid"
              }
            ]
          },
          disableGenerator: true
        }
      ],
      "nuxt-sm"
    ],

    /*
     ** Generate
     */
    generate: {
      fallback: true
    },

    /*
     ** Sitemap
     */
    sitemap: {
      hostname: env.APP_URL,
      gzip: true,
      exclude: []
    },

    /*
     ** Env
     */
    env,

    /*
     ** Public runtime config
     */
    publicRuntimeConfig: {
      SM_HOY_MAILCHIMP_FORM_ACTION: "",
      SM_HOY_MAILCHIMP_HONEY_POT: ""
    },

    /*
     ** Server configuration
     */
    server: {
      host: env.APP_HOST,
      port: env.APP_PORT
    },

    /*
     ** Build
     */
    build: {
      html: {
        minify: {
          minifyCSS: false,
          minifyJS: false
        }
      },
      transpile: ["vue-slicezone"]
    }
  };
};
