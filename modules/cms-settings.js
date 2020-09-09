import Prismic from "prismic-javascript";

export default async function (options) {
  const { nuxt } = this;

  const api = await Prismic.api(options.endpoint);
  const settings = (await api.getSingle("settings")).data;

  nuxt.options.publicRuntimeConfig.googleAnalytics = {
    id: settings.google_analytics_id
  };
}
