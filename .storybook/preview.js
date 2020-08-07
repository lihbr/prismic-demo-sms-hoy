import { action } from '@storybook/addon-actions';
import Vue from "vue";

import "~/assets/css/tailwind.css";
import "~/assets/css/style.css";
import { common } from "@prismicio/vue/components";

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
      action("Link target:")(this.to);
    }
  },
  // eslint-disable-next-line
  template: "<a href=\"#\" @click.prevent=\"log()\"><slot>NuxtLink</slot></a>"
});
Vue.component("prismic-link", {
  props: {
    field: {
      type: Object,
      default: {}
    }
  },
  methods: {
    log() {
      action("Link target:")(JSON.stringify(this.field));
    }
  },
  // eslint-disable-next-line
  template: "<a href=\"#\" @click.prevent=\"log()\"><slot>PrismicLink</slot></a>"
});

// Prismic
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
