<!-- HEALTH:UNKNOWN text-image -->
<template>
  <div class="textImage">
    <small-container>
      <heading-h2 v-if="slice.primary.title" class="text-center mb-3">
        {{ $prismic.asText(slice.primary.title) }}
      </heading-h2>
      <div
        class="sm:flex sm:-mx-4 items-center"
        :class="{ 'flex-row-reverse': isInverted }"
      >
        <paragraph class="sm:px-4 sm:flex-1 text-center sm:text-left">
          <prismic-rich-text :field="slice.primary.text" />
        </paragraph>
        <figure class="mt-8 sm:mt-0 sm:px-4 sm:flex-1">
          <prismic-image
            :field="slice.primary.image"
            class="w-full shadow-xl rounded-lg"
          />
        </figure>
      </div>
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
  },
  computed: {
    isInverted() {
      return (
        this.slice.slice_label && this.slice.slice_label.match(/inverted/i)
      );
    }
  }
};
</script>
