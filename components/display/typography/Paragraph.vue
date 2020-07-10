<!-- HEALTH:UNKNOWN typography-paragraph -->
<template>
  <component :is="tag" class="typographyParagraph text-l sm:text-m lg:text-2xl">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
};
</script>

<style scoped>
.typographyParagraph::v-deep a {
  text-decoration: underline;
}

.typographyParagraph::v-deep a:hover {
  text-decoration-color: theme("colors.cyan.default");
  @apply text-blue;
}
</style>
