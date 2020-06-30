<!-- HEALTH:UNKNOWN typography-heading-h2 -->
<template>
  <component
    :is="tag"
    class="typographyHeadingH2 leading-tight font-bold text-4xl lg:text-6xl"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "h2"
    }
  }
};
</script>
