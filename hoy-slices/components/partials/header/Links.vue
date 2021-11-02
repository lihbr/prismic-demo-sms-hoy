<!-- HEALTH:UNKNOWN header-links -->
<template>
  <nav
    class="
      headerLinks
      absolute
      md:static
      pr-4
      md:pr-0
      text-right
      md:text-left
      w-screen
      md:w-auto
    "
    :class="{ active }"
  >
    <ul class="mt-5 -mb-1 md:-mx-2 md:my-0">
      <li
        v-for="(item, index) in links"
        :key="`${item.title}-${index}`"
        class="
          md:inline-block
          py-1
          md:px-2 md:py-0
          transition-transform
          ease-in
        "
        :class="{ 'duration-200': !active, 'duration-300': active }"
      >
        <header-link :link="item.link" :cta="item.cta">
          {{ item.title }}
        </header-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import HeaderLink from "./Link.vue";

export default {
  components: {
    HeaderLink
  },
  props: {
    links: {
      type: Array,
      default: () => []
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.headerLinks {
  top: 100%;
  left: 100%;
}

.headerLinks::after {
  content: "";
  z-index: -1;
  transition: 0.15s opacity ease-in-out;
  @apply fixed inset-0 bg-white opacity-0 pointer-events-none;
}

.headerLinks.active::after {
  @apply opacity-75 pointer-events-auto;
}

.headerLinks li {
  transform: translateX(0);
  will-change: transform;
}

.headerLinks.active li {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateX(-100vw);
}

.headerLinks li:nth-child(2) {
  transition-delay: 0.05s;
}
.headerLinks li:nth-child(3) {
  transition-delay: 0.1s;
}
.headerLinks li:nth-child(4) {
  transition-delay: 0.15s;
}
.headerLinks li:nth-child(5) {
  transition-delay: 0.2s;
}
.headerLinks li:nth-child(6) {
  transition-delay: 0.25s;
}
.headerLinks li:nth-child(7) {
  transition-delay: 0.3s;
}
.headerLinks li:nth-child(8) {
  transition-delay: 0.35s;
}

@screen md {
  .headerLinks::after {
    @apply hidden;
  }

  .headerLinks li {
    transition: none;
    transform: none !important;
  }
}
</style>
