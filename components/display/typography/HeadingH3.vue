<!-- HEALTH:UNKNOWN typography-heading-h3 -->
<template>
  <component
    :is="tag"
    class="typographyHeadingH3 leading-tight font-bold text-3xl sm:text-2xl lg:text-4xl"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  }
};
</script>
