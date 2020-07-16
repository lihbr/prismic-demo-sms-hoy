<!-- HEALTH:UNKNOWN image-hero -->
<template>
  <div class="imageHero pt-6 pb-12 sm:pt-12 overflow-hidden">
    <small-container class="mb-12 text-center">
      <heading v-if="slice.primary.title" :level="1" class="mb-4">
        {{ $prismic.asText(slice.primary.title) }}
      </heading>
      <paragraph big>
        <prismic-rich-text :field="slice.primary.text" />
      </paragraph>
      <ul v-if="slice.items.length" class="-mx-2 mt-3 mb-5">
        <li
          v-for="(cta, index) in slice.items"
          :key="`${cta.title}-${index}`"
          class="inline-block px-2 py-1"
        >
          <simple-button v-if="cta.link" class="block" :link="cta.link">
            {{ cta.title }}
          </simple-button>
        </li>
      </ul>
    </small-container>
    <medium-container class="relative">
      <figure class="rounded-xl shadow-xl overflow-hidden">
        <prismic-image
          class="object-cover w-full"
          :field="slice.primary.image"
        />
      </figure>
      <figure class="background absolute pointer-events-none inset-0">
        <prismic-image
          class="object-contain w-full h-full"
          :field="slice.primary.background"
        />
      </figure>
    </medium-container>
  </div>
</template>

<script>
import SmallContainer from "~/components/layouts/SmallContainer.vue";
import MediumContainer from "~/components/layouts/MediumContainer.vue";

import Heading from "~/components/display/typography/Heading.vue";
import Paragraph from "~/components/display/typography/Paragraph.vue";

import SimpleButton from "~/components/controls/SimpleButton.vue";

export default {
  components: {
    SmallContainer,
    MediumContainer,
    Heading,
    Paragraph,
    SimpleButton
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(JSON.stringify(this.slice));
  }
};
</script>

<style scoped>
.imageHero .background {
  z-index: -1;
}

.imageHero .background img {
  transform: scale(1.4);
  object-position: center;
}
</style>
