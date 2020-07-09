<!-- HEALTH:UNKNOWN header -->
<!-- TODO: Refactor into smaller component -->
<template>
  <header
    class="header h-16 px-2 flex justify-between items-center bg-white"
    :class="{ hasShadow }"
  >
    <nuxt-link v-if="logo" to="/" class="h-8 lg:h-10 xl:h-12">
      <prismic-image :field="logo" class="h-full" />
    </nuxt-link>
    <input id="burger" type="checkbox" class="hidden" />
    <label
      class="burger block md:hidden p-2 font-bold text-blue text-xl cursor-pointer"
      for="burger"
    >
      <span />
      Menu
    </label>
    <nav class="absolute md:static">
      <ul class="mt-5 -mb-1 md:-mx-2 md:my-0">
        <li
          v-for="(item, index) in navigation"
          :key="`${item.title}-${index}`"
          class="md:inline-block py-1 md:px-2 md:py-0"
        >
          <prismic-link :field="item.link" :class="item.cta ? 'cta' : 'link'">
            {{ item.title }}
          </prismic-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import throttle from "lodash/throttle";

export default {
  data() {
    return {
      scrollPosition: 0
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

/* Burger */
.header .burger span {
  height: 3px;
  width: 18px;
  transition: 0s background 0.15s;
  top: -4px;
  @apply bg-blue inline-block relative;
}

.header .burger span::before,
.header .burger span::after {
  content: "";
  transition: 0.15s margin 0.15s, 0.15s transform;
  height: 3px;
  width: 22px;
  will-change: transform;
  @apply right-0 block absolute bg-blue;
}

.header .burger span::before {
  margin-top: -7px;
}

.header .burger span::after {
  margin-top: 7px;
}

.header #burger:checked ~ .burger span {
  background: transparent;
}

.header #burger:checked ~ .burger span::before,
.header #burger:checked ~ .burger span::after {
  transition-delay: 0s, 0.2s;
  margin-top: 0;
}

.header #burger:checked ~ .burger span::before {
  transform: rotate(45deg);
}

.header #burger:checked ~ .burger span::after {
  transform: rotate(-45deg);
}

/* Nav */
.header nav::after {
  content: "";
  z-index: -1;
  transition: 0.15s opacity ease-in-out;
  @apply fixed inset-0 bg-white opacity-0 pointer-events-none;
}

.header #burger:checked ~ nav::after {
  @apply opacity-75 pointer-events-auto;
}

.header nav {
  top: 100%;
  left: 100%;
  @apply text-right pr-4 w-screen;
}

/* Nav item */
.header nav .link,
.header nav .cta {
  @apply inline-block text-2xl font-bold px-5 py-2 rounded-full text-white;
}

.header nav .link {
  background: linear-gradient(
    90deg,
    theme("colors.purple.default") 0%,
    theme("colors.orange.default") 100%
  );
}

.header nav .cta {
  background: linear-gradient(
    90deg,
    theme("colors.blue.default") 0%,
    theme("colors.cyan.default") 200%
  );
}

/* Animation */
.header nav li {
  transition: 0.2s transform ease-in;
  transform: translateX(0);
  will-change: transform;
}

.header #burger:checked ~ nav li {
  transition-duration: 0.35s;
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateX(-100vw);
}

.header nav li:nth-child(2) {
  transition-delay: 0.05s;
}
.header nav li:nth-child(3) {
  transition-delay: 0.1s;
}
.header nav li:nth-child(4) {
  transition-delay: 0.15s;
}
.header nav li:nth-child(5) {
  transition-delay: 0.2s;
}
.header nav li:nth-child(6) {
  transition-delay: 0.25s;
}
.header nav li:nth-child(7) {
  transition-delay: 0.3s;
}
.header nav li:nth-child(8) {
  transition-delay: 0.35s;
}

/* Responsive */
@screen md {
  .header nav {
    @apply pr-0 text-left w-auto;
  }

  .header nav::after {
    @apply hidden;
  }

  .header nav li {
    transition: none;
    transform: none !important;
  }

  .header nav .link,
  .header nav .cta {
    @apply text-m;
  }

  .header nav .link {
    @apply p-0 text-black underline;
    background: none;
  }

  .header nav .link:hover {
    text-decoration-color: theme("colors.cyan.default");
    @apply text-blue;
  }

  .header nav .cta:hover {
    box-shadow: 0 0 0 1.5px theme("colors.cyan.default");
  }
}

@screen lg {
  .header nav .link,
  .header nav .cta {
    @apply text-l;
  }
}

@screen xl {
  .header nav .link,
  .header nav .cta {
    @apply text-2xl;
  }
}
</style>
