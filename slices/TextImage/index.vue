<!-- HEALTH:UNKNOWN text-image -->
<template>
  <div class="textImage">
    <small-container>
      <h2 class="heading-h2">
        Some title there...
      </h2>
      <div class="flex -mx-4 items-center">
        <div class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          asperiores rem totam tempora exercitationem? Ullam dolore,
          exercitationem animi natus facilis tenetur totam illo odio nemo hic
          repudiandae magni quas aut.
        </div>
        <div class="img">
          <img
            src="https://picsum.photos/600/400"
            alt=""
            class="w-full shadow-xl rounded-lg"
          />
        </div>
      </div>
    </small-container>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
.textImage
  .text, .img
    @apply px-4 flex-1
</style>
