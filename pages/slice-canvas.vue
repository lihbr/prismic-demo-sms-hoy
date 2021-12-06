<template>
  <slice-canvas-renderer v-slot="{ slices }" :state="state">
    <slice-zone :slices="slices" />
  </slice-canvas-renderer>
</template>

<script>
import { SliceCanvasRenderer } from "@prismicio/slice-canvas-renderer-vue";
import SliceZone from "vue-slicezone";

import state from "~~/.slicemachine/libraries-state.json";

export default {
  components: {
    SliceCanvasRenderer,
    SliceZone
  },
  data() {
    return { state };
  }
};
</script>
