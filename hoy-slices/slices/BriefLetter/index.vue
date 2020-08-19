<!-- HEALTH:UNKNOWN brief-letter -->
<template>
  <div class="briefLetter">
    <small-container>
      <paragraph big class="shadow-2xl rounded-2xl sm:-mx-12 p-6 sm:p-12">
        <prismic-rich-text :field="slice.primary.text" class="space-y-6" />
      </paragraph>
    </small-container>
  </div>
</template>

<script>
import SmallContainer from "../../components/layouts/SmallContainer.vue";

import Paragraph from "../../components/display/typography/Paragraph.vue";

export default {
  components: {
    SmallContainer,
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
