<!-- HEALTH:UNKNOWN image-hero -->
<template>
  <div class="imageHero">
    <small-container>
      ImageHero
    </small-container>
  </div>
</template>

<script>
import SmallContainer from "~/components/layouts/SmallContainer.vue";

export default {
  components: {
    SmallContainer
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
