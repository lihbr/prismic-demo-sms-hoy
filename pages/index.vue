<!-- HEALTH:UNKNOWN __page__home -->
<template>
  <div class="__page__home">
    <div class="content">
      <slice-zone class="sliceZone space-y-8 py-8" :slices="data.body" />
    </div>
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  components: {
    SliceZone
  },
  async asyncData(context) {
    const data = (await context.$prismic.api.getByUID("page", "home")).data;

    return { data };
  },
  mounted() {
    this.$store.dispatch("pageChanged");
  },
  head() {
    const { meta_title, meta_description, meta_image } = this.data;
    return this.$buildHead({
      title: meta_title || "💐",
      description: meta_description,
      metaImage: {
        og: undefined /* meta_image.url */,
        tw: undefined /* meta_image.twitter_variant.url */
      },
      path: this.$route.path
    });
  }
};
</script>

<style lang="sass" scoped>
// .__page__home
</style>
