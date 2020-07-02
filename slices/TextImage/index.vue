<!-- HEALTH:UNKNOWN text-image -->
<template>
  <div
    class="textImage"
    :class="{
      'pb-4': slice.primary.caption,
      inverted: isInverted
    }"
  >
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
        <figure class="mt-8 sm:mt-0 sm:px-4 sm:flex-1 relative">
          <prismic-image
            :field="slice.primary.image"
            class="w-full shadow-xl rounded-xl"
          />
          <figcaption
            v-if="slice.primary.caption"
            class="hidden sm:block w-64 text-center leading-tight text-m lg:text-xl absolute"
          >
            <span
              class="text-white px-1 rounded align-middle"
              :style="{
                background: slice.primary.caption_color || '#6600FF'
              }"
            >
              {{ slice.primary.caption }}
            </span>
          </figcaption>
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

<style scoped>
.textImage figcaption {
  bottom: -0.75em;
  right: -3.5em;
  transform: rotateZ(-15deg);
}

.textImage figcaption span {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

.textImage.inverted figcaption {
  left: -3.5em;
  transform: rotateZ(15deg);
}

@screen lg {
  .textImage figcaption {
    right: -2em;
  }
  .textImage.inverted figcaption {
    left: -2em;
  }
}
</style>
