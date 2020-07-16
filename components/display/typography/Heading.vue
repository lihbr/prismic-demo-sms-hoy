<!-- HEALTH:UNKNOWN typography-heading -->
<template>
  <component
    :is="cTag"
    class="typographyHeading font-bold"
    :class="{
      'leading-none text-5xl sm:text-7xl lg:text-8xl': level === 1,
      'leading-tight text-4xl lg:text-6xl': level === 2,
      'leading-tight text-3xl sm:text-2xl lg:text-4xl': level === 3
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    },
    tag: {
      type: String,
      default: ""
    }
  },
  computed: {
    cTag() {
      return this.tag || `h${this.level}`;
    }
  }
};
</script>
