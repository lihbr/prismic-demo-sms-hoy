<!-- HEALTH:UNKNOWN simple-text -->
<template>
  <div class="simpleText">
    <small-container>
      <heading-h2 v-if="slice.primary.title" class="text-center mb-3">
        {{ $prismic.asText(slice.primary.title) }}
      </heading-h2>
      <paragraph class="text-center">
        <prismic-rich-text :field="slice.primary.text" />
      </paragraph>
    </small-container>
  </div>
</template>

<script>
import SmallContainer from "~/components/layouts/SmallContainer.vue";

import HeadingH2 from "~/components/display/typography/HeadingH2.vue";
import Paragraph from "~/components/display/typography/Paragraph.vue";

export default {
  components: {
    SmallContainer,
    HeadingH2,
    Paragraph
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
};
</script>
