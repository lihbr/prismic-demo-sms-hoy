import AppFooter from "./Footer.vue";
import mock from "./mock.json";

export default {
  title: "Components/Partials"
};

export const __Footer = () => ({
  components: { AppFooter },
  props: {
    mock: {
      default: mock
    }
  },
  // eslint-disable-next-line
  template: "<app-footer :partials=\"mock\" />"
});
