<!-- HEALTH:UNKNOWN info-card -->
<template>
  <div class="infoCard lg:py-2">
    <medium-container>
      <div
        class="card rounded-2xl sm:flex -mx-5 py-5 items-center"
        :class="[{ 'flex-row-reverse': isInverted }, shape]"
        :style="{
          color: slice.primary.text_color || '#fefefe',
          backgroundColor: slice.primary.background_color || '#222222'
        }"
      >
        <div class="px-5 mx-2 sm:mx-0 sm:flex-1 text-center sm:text-left">
          <heading-h3 v-if="slice.primary.title" class="mb-2">
            {{ $prismic.asText(slice.primary.title) }}
          </heading-h3>
          <paragraph class="sm:mb-3">
            <prismic-rich-text :field="slice.primary.text" />
          </paragraph>
        </div>
        <figure class="mt-8 sm:mt-0 px-5 sm:flex-1 relative">
          <prismic-image
            :field="slice.primary.image"
            class="w-full shadow-xl rounded-xl"
          />
        </figure>
      </div>
    </medium-container>
  </div>
</template>

<script>
import MediumContainer from "~/components/layouts/MediumContainer.vue";

import HeadingH3 from "~/components/display/typography/HeadingH3.vue";
import Paragraph from "~/components/display/typography/Paragraph.vue";

export default {
  components: {
    MediumContainer,
    HeadingH3,
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
    },
    shape() {
      switch (this.slice.primary.background_shape) {
        case "Shape 1":
          return "shape-01";
        case "Shape 2":
          return "shape-02";
        case "Shape 3":
          return "shape-03";
        default:
          return "shape-01";
      }
    }
  }
};
</script>

<style scoped>
@screen sm {
  .infoCard .card {
    transform: rotateZ(-1deg);
    background-repeat: no-repeat;
    background-position: right -12em center;
    background-size: 71%;
  }

  .infoCard .card.flex-row-reverse {
    transform: rotateZ(1deg);
    background-position: left -12em center;
  }

  .infoCard .card.shape-01 {
    background-image: url("shape-01.svg");
  }

  .infoCard .card.shape-02 {
    background-image: url("shape-02.svg");
  }

  .infoCard .card.shape-03 {
    background-image: url("shape-03.svg");
  }
}
</style>
