<template>
  <ix-img v-if="image" :src="image" />
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    image() {
      try {
        return new URL(this.field.url).pathname;
      } catch (err) {
        return "";
      }
    }
  }
};
</script>
