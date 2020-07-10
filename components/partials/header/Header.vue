<!-- HEALTH:UNKNOWN header -->
<template>
  <header
    class="header h-16 px-2 flex justify-between items-center bg-white"
    :class="{ hasShadow }"
  >
    <nuxt-link v-if="logo" to="/" class="h-8 lg:h-10 xl:h-12">
      <prismic-image :field="logo" class="h-full" />
    </nuxt-link>
    <header-burger v-model="menuOpen" class="block md:hidden" />
    <header-links :links="navigation" :active="menuOpen" />
  </header>
</template>

<script>
import throttle from "lodash/throttle";

import HeaderBurger from "~/components/partials/header/Burger.vue";
import HeaderLinks from "~/components/partials/header/Links.vue";

export default {
  components: {
    HeaderBurger,
    HeaderLinks
  },
  data() {
    return {
      scrollPosition: 0,
      menuOpen: false
    };
  },
  computed: {
    logo() {
      return this.$store.state.content.partials.header_logo;
    },
    navigation() {
      return this.$store.state.content.partials.header_navigation;
    },
    hasShadow() {
      return this.scrollPosition > 20;
    }
  },
  mounted() {
    this.scroll();
    this.$options._scrollEvent = throttle(this.scroll.bind(this), 100);
    window.addEventListener("scroll", this.$options._scrollEvent);
  },
  destroyed() {
    window.removeEventListener("scroll", this.$options._scrollEvent);
  },
  methods: {
    scroll() {
      const scrollY = window.pageYOffset;
      this.scrollPosition = scrollY;
    }
  }
};
</script>

<style scoped>
.header {
  transition: 0.3s box-shadow ease;
  box-shadow: 0 0 3rem transparent;
}

.header.hasShadow {
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.1);
}
</style>
