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
export default {
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
    theme("colors.beige.DEFAULT") 0%,
    theme("colors.beige.DEFAULT") 100%
  );
}

.footerLinks .link:hover {
  background: linear-gradient(
    90deg,
    theme("colors.beige.DEFAULT") 0%,
    theme("colors.orange.DEFAULT") 600%
  );
}
</style>
