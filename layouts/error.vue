<!-- HEALTH:UNKNOWN __page__error -->
<template>
  <div class="__page__error py-32 text-center">
    <h1>{{ code }}</h1>
    <h2>{{ message | uc_first }}</h2>
    <nuxt-link v-if="$route.path !== '/'" class="underline" to="/">
      Home page
    </nuxt-link>
    <a v-else class="underline" href="/"> Home page </a>
  </div>
</template>

<script>
import statusMsg from "~/assets/js/statusMsg.json";

const unknown = "Something happened, but we're taking care of it!";

export default {
  props: {
    error: {
      type: Object,
      default: () => ({
        statusCode: 0,
        message: ""
      })
    }
  },
  head() {
    return this.$buildHead({
      title: `${this.code}` || "💐",
      description: this.$options.filters.uc_first(this.message),
      metaImage: { og: undefined, tw: undefined },
      path: this.$route.path
    });
  },
  computed: {
    code() {
      return this.error.statusCode;
    },
    message() {
      return statusMsg[this.code] || unknown;
    }
  },
  mounted() {
    this.$store.dispatch("pageChanged");
  }
};
</script>
