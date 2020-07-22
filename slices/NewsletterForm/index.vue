<!-- HEALTH:UNKNOWN newsletter-form -->
<template>
  <div class="newsletterForm">
    <medium-container>
      <form
        :action="action"
        method="post"
        target="_blank"
        class="sm:flex sm:justify-center"
      >
        <input
          id="mce-EMAIL"
          type="email"
          value=""
          name="EMAIL"
          class="text-2xl sm:text-3xl lg:text-4xl font-medium py-2 border-b border-dashed focus:border-blue focus:outline-none mb-5 sm:mb-0 sm:mr-5 w-full sm:max-w-md"
          :placeholder="slice.primary.input_placeholder || 'Email'"
          required
        />
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" :name="honeyPot" tabindex="-1" value="" />
        </div>
        <simple-button
          id="mc-embedded-subscribe"
          type="submit"
          value="Subscribe"
          name="subscribe"
          class="w-full sm:w-auto"
        >
          {{ slice.primary.subscribe_label || "Subscribe" }}
        </simple-button>
      </form>
    </medium-container>
  </div>
</template>

<script>
import MediumContainer from "~/components/layouts/MediumContainer.vue";

import Heading from "~/components/display/typography/Heading.vue";
import Paragraph from "~/components/display/typography/Paragraph.vue";

import SimpleButton from "~/components/controls/SimpleButton.vue";

export default {
  components: {
    MediumContainer,
    SimpleButton
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  computed: {
    action() {
      return (
        this.slice.primary.form_action ||
        this.$config.SM_HOY_MAILCHIMP_FORM_ACTION ||
        ""
      );
    },
    honeyPot() {
      return (
        this.slice.primary.honey_pot ||
        this.$config.SM_HOY_MAILCHIMP_HONEY_POT ||
        ""
      );
    }
  }
};
</script>

<style scoped>
.newsletterForm input:-webkit-autofill,
.newsletterForm input:-webkit-autofill:hover,
.newsletterForm input:-webkit-autofill:focus {
  box-shadow: 0 0 0px 100px inset theme("colors.white.default") !important;
}
</style>
