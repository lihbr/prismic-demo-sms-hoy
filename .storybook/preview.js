import Vue from "vue";
import "~/assets/css/style.css";

// Nuxt
Vue.component("nuxt-link", {
  props: {
    to: {
      type: String,
      default: ""
    }
  },
  methods: {
    log() {
      action("link target")(this.to);
    }
  },
  // eslint-disable-next-line
  template: "<a href=\"#\" @click.prevent=\"log()\"><slot>NuxtLink</slot></a>"
});

// Prismic
import { common } from "@prismicio/vue/components";

Object.entries(common).forEach(([_, c]) => {
  Vue.component(c.name, c);
});

Vue.prototype.$endpoint = "https://repo.prismic.io/api/v2";

Vue.prototype.$prismic = {
  linkResolver() {},
  asText(richText) {
    return richText && Array.isArray(richText) && richText[0]
      ? richText[0].text
      : "";
  }
};
