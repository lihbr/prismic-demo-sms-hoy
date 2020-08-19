<!-- HEALTH:UNKNOWN typography-paragraph -->
<template>
  <component
    :is="tag"
    class="typographyParagraph"
    :class="{
      'text-l sm:text-m lg:text-2xl': !big,
      'text-2xl sm:text-xl lg:text-3xl font-medium': big
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    big: {
      type: Boolean,
      default: false
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

.typographyParagraph::v-deep img {
  @apply mx-auto;
}

@screen sm {
  .typographyParagraph::v-deep img {
    margin-left: inherit;
    margin-right: inherit;
  }
}
</style>
