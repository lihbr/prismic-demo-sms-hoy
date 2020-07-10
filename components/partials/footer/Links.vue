<!-- HEALTH:UNKNOWN footer-links -->
<template>
  <nav class="footerLinks">
    <ul class="text-center flex flex-col items-center sm:block">
      <li
        v-for="(item, index) in links"
        :key="`${item.title}-${index}`"
        class="sm:inline-block"
      >
        <prismic-link
          :field="item.link"
          class="link block rounded-full text-blue py-1 px-3 text-s lg:text-l"
        >
          {{ item.title }}
        </prismic-link>
      </li>
    </ul>
  </nav>
</template>

<script>
// import Component from "~/components/Component.vue";

export default {
  components: {
    // Component
  },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.footerLinks ul {
  margin: -4px -2px;
}

.footerLinks li {
  padding: 4px 2px;
}

.footerLinks .link {
  background: linear-gradient(
    90deg,
    theme("colors.beige.default") 0%,
    theme("colors.beige.default") 100%
  );
}

.footerLinks .link:hover {
  background: linear-gradient(
    90deg,
    theme("colors.beige.default") 0%,
    theme("colors.orange.default") 600%
  );
}
</style>
