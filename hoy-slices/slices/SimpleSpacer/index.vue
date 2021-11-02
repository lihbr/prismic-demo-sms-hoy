<!-- HEALTH:UNKNOWN simple-spacer -->
<template>
  <hr
    class="simpleSpacer text-transparent"
    :class="{
      'h-16': slice.variation === 'small',
      'h-32': slice.variation === 'default-slice',
      'h-64': slice.variation === 'large'
    }"
  />
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
};
</script>
