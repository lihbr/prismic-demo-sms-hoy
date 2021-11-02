import Prismic from "@prismicio/client";

export default async function (options) {
  const { nuxt } = this;

  const api = Prismic.client(options.endpoint);
  const settings = (await api.getSingle("settings")).data;

  nuxt.options.publicRuntimeConfig.googleAnalytics = {
    id: settings.google_analytics_id
  };
}
