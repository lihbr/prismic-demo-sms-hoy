<!-- HEALTH:UNKNOWN simple-button -->
<template>
  <component
    :is="tag"
    :field="link"
    class="simpleButton text-2xl sm:text-3xl lg:text-4xl font-medium px-5 py-2 rounded-full text-white"
  >
    <slot />
  </component>
</template>

<script>
// import Component from "~/components/Component.vue";

export default {
  components: {
    // Component
  },
  props: {
    link: {
      type: Object,
      default: null
    }
  },
  computed: {
    tag() {
      return this.link ? "prismic-link" : "button";
    }
  }
};
</script>

<style scoped>
.simpleButton {
  background: linear-gradient(
    90deg,
    theme("colors.blue.default") 0%,
    theme("colors.cyan.default") 200%
  );
}

@screen md {
  .simpleButton:hover,
  .simpleButton:focus {
    box-shadow: 0 0 0 1.5px theme("colors.cyan.default");
    @apply outline-none;
  }
}
</style>
