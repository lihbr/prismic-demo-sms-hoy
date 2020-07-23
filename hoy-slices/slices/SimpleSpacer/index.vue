<!-- HEALTH:UNKNOWN simple-spacer -->
<template>
  <hr
    class="simpleSpacer text-transparent"
    :class="{
      'h-16': slice.primary.size === 'Small',
      'h-32': slice.primary.size === 'Medium',
      'h-64': slice.primary.size === 'Large'
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
