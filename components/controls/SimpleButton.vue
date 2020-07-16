<!-- HEALTH:UNKNOWN simple-button -->
<template>
  <prismic-link
    :field="link"
    class="simpleButton text-2xl sm:text-3xl lg:text-4xl font-medium px-5 py-2 rounded-full text-white"
  >
    <slot />
  </prismic-link>
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
      required: true
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
  .simpleButton:hover {
    box-shadow: 0 0 0 1.5px theme("colors.cyan.default");
  }
}
</style>
