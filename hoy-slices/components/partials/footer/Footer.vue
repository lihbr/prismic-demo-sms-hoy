<!-- HEALTH:UNKNOWN footer -->
<template>
  <footer class="footer py-8">
    <small-container>
      <prismic-image
        v-if="partials.footer_logo"
        :field="partials.footer_logo"
        class="w-16 mx-auto"
      />
      <paragraph class="font-bold text-center mb-4">
        {{ partials.footer_motto }}
      </paragraph>
      <footer-links class="mb-10" :links="partials.footer_navigation" />
      <paragraph class="text-center mb-3">
        <prismic-rich-text
          v-if="partials.footer_information"
          :field="partials.footer_information"
        />
      </paragraph>
      <prismic-rich-text
        v-if="partials.footer_footnote"
        class="footnote text-center italic text-s lg:text-m"
        :field="partials.footer_footnote"
      />
    </small-container>
  </footer>
</template>

<script>
import SmallContainer from "../../layouts/SmallContainer.vue";
import FooterLinks from "./Links.vue";
import Paragraph from "../../display/typography/Paragraph.vue";

export default {
  components: {
    SmallContainer,
    FooterLinks,
    Paragraph
  },
  props: {
    partials: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.footer .footnote::v-deep a {
  @apply underline;
}
.footer .footnote::v-deep a:hover {
  text-decoration-color: theme("colors.cyan.default");
  @apply text-blue;
}
</style>
