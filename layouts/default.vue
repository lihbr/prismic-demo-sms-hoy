<!-- HEALTH:UNKNOWN __layout__default -->
<template>
  <div class="__layout__default">
    <app-header class="fixed z-10 top-0 left-0 w-full" :partials="partials" />
    <main class="main">
      <nuxt />
    </main>
    <app-footer class="mt-24" :partials="partials" />
  </div>
</template>

<script>
import objectFitImages from "object-fit-images";

import AppHeader from "~/components/partials/header/Header.vue";
import AppFooter from "~/components/partials/footer/Footer.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  async middleware({ store }) {
    await store.dispatch("content/load");
  },
  computed: {
    detect() {
      return this.$store.state.detect;
    },
    partials() {
      return this.$store.state.content.partials;
    }
  },
  created() {
    this.$store.dispatch("init");
  },
  mounted() {
    /**
     * Default operations
     */
    this.$store.dispatch("detect/detect");
    // Object fit polyfill
    objectFitImages();
    // Force add classes once
    document.documentElement.classList.add(...this.getHtmlClass());
    /**
     * End of default operations
     */
  },
  methods: {
    getHtmlClass() {
      const htmlClass = [];

      this.detect.browser && htmlClass.push(this.detect.browser);
      this.detect.isMobile && htmlClass.push("isMobile");
      this.detect.isTouch && htmlClass.push("isTouch");

      return htmlClass;
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: this.getHtmlClass().join(" ")
      }
    };
  }
};
</script>
