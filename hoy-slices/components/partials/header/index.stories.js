import AppHeader from "./Header.vue";
import mock from "./mock.json";

export default {
  title: "Components/Partials"
};

export const __Header = () => ({
  components: { AppHeader },
  props: {
    mock: {
      default: mock
    }
  },
  // eslint-disable-next-line
  template: "<app-header class=\"fixed z-10 top-0 left-0 w-full\" :partials=\"mock\" />"
});
