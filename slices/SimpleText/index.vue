<!-- HEALTH:UNKNOWN simple-text -->
<template>
  <div class="simpleText">
    <small-container>
      <heading v-if="slice.primary.title" :level="2" class="text-center mb-3">
        {{ $prismic.asText(slice.primary.title) }}
      </heading>
      <paragraph class="text-center">
        <prismic-rich-text :field="slice.primary.text" />
      </paragraph>
    </small-container>
  </div>
</template>

<script>
import SmallContainer from "~/components/layouts/SmallContainer.vue";

import Heading from "~/components/display/typography/Heading.vue";
import Paragraph from "~/components/display/typography/Paragraph.vue";

export default {
  components: {
    SmallContainer,
    Heading,
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
