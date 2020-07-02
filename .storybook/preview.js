import Vue from "vue";
import { configure } from "@storybook/vue";
import "~/assets/css/style.css";

// Nuxt
Vue.component("nuxt-link", {
  props: ["to"],
  methods: {
    log() {
      action("link target")(this.to);
    }
  },
  template: "<a href=\"#\" @click.prevent=\"log()\"><slot>NuxtLink</slot></a>"
});

// Prismic
import { common } from "@prismicio/vue/components";

Object.entries(common).forEach(([_, c]) => {
  Vue.component(c.name, c);
});

Vue.prototype.$endpoint = "https://repoz.prismic.io/api/v2";

Vue.prototype.$prismic = {
  linkResolver() {},
  asText(richText) {
    return richText && Array.isArray(richText) && richText[0]
      ? richText[0].text
      : "";
  }
};

configure(require.context("../slices", true, /\.stories\.js$/), module);
