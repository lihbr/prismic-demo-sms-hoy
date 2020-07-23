<!-- HEALTH:UNKNOWN header-link -->
<template>
  <prismic-link
    :field="link"
    class="headerLink inline-block text-2xl md:text-m lg:text-l xl:text-2xl font-bold px-5 py-2 rounded-full text-white"
    :class="
      cta ? 'cta' : 'link md:p-0 md:text-black md:underline md:hover:text-blue'
    "
  >
    <slot />
  </prismic-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    },
    cta: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.headerLink.link {
  background: linear-gradient(
    90deg,
    theme("colors.purple.default") 0%,
    theme("colors.orange.default") 100%
  );
}

.headerLink.cta {
  background: linear-gradient(
    90deg,
    theme("colors.blue.default") 0%,
    theme("colors.cyan.default") 200%
  );
}

@screen md {
  .headerLink.link {
    background: none;
  }

  .headerLink.link:hover {
    text-decoration-color: theme("colors.cyan.default");
  }

  .headerLink.cta:hover {
    box-shadow: 0 0 0 1.5px theme("colors.cyan.default");
  }
}
</style>
