<!-- HEALTH:UNKNOWN __page__home -->
<template>
  <div class="__page__home">
    <div class="content">
      <slice-zone
        class="sliceZone space-y-8 py-32 sm:pt-48"
        :slices="data.body"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const data = (await context.$prismic.api.getByUID("page", "home")).data;

    return { data };
  },
  head() {
    const { meta_title, meta_description, meta_image } = this.data;
    return this.$buildHead({
      title: meta_title || "🦜",
      description: meta_description,
      metaImage: {
        og: meta_image.url,
        tw: meta_image.twitter_variant.url
      },
      path: this.$route.path
    });
  },
  mounted() {
    this.$store.dispatch("pageChanged");
  }
};
</script>
