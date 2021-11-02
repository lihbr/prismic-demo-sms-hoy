<!-- HEALTH:UNKNOWN __page__preview -->
<template>
  <div class="__page__preview min-h-screen py-32 flex items-center">
    <small-container class="flex-1 sm:flex">
      <picture
        class="
          block
          sm:self-stretch sm:flex-1
          rounded-2xl
          overflow-hidden
          relative
        "
      >
        <img
          src="https://images.prismic.io/200629-sms-hoy/f596a543-d593-4296-9abd-3d3ac15f1e39_ray-hennessy-mpw37yXc_WQ-unsplash.jpg?auto=compress,format&rect=0,0,1839,1533&w=300&h=250"
          alt="An Atlantic Puffin watching you"
          class="object-cover w-full h-full"
        />
        <svg
          class="animate-spin h-5 w-5 text-blue absolute"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </picture>
      <div class="sm:self-center sm:flex-1 mt-5 sm:ml-5 sm:mt-0 space-y-2">
        <heading :level="3">Prismic Preview is Loading 🎉</heading>
        <blockquote
          v-if="motd.message"
          class="text-blue text-center sm:text-right"
        >
          {{ motd.message }}
          <small v-if="motd.author" class="block text-right">
            — {{ motd.author }}
          </small>
        </blockquote>
      </div>
    </small-container>
  </div>
</template>

<script>
import SmallContainer from "~/hoy-slices/components/layouts/SmallContainer.vue";

import Heading from "~/hoy-slices/components/display/typography/Heading.vue";

export default {
  components: {
    SmallContainer,
    Heading
  },
  async asyncData({ $prismic, $logger }) {
    let motds = [];

    try {
      motds = (await $prismic.api.getSingle("motd")).data.motds
        .map(motd => ({ ...motd, message: $prismic.asText(motd.message) }))
        .filter(motd => motd.message);
    } catch (err) {
      $logger.error(err);
    }

    if (motds.length) {
      return { motds };
    } else {
      return {};
    }
  },
  data() {
    return {
      motd: { message: "", author: "" },
      motds: [
        { message: "If they only eat fish, what about sushis?", author: "Hugo" }
      ]
    };
  },
  mounted() {
    this.randomizeMotd();

    // Adding some delay for the sake of seeing the motd
    setTimeout(() => {
      this.$prismic.preview();
    }, 1000);
  },
  methods: {
    randomizeMotd() {
      this.motd = this.motds[Math.floor(Math.random() * this.motds.length)];
    }
  }
};
</script>

<style scoped>
.__page__preview svg {
  bottom: 10px;
  right: 10px;
}
</style>
