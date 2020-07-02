import InfoCard from "./";
import mock from "./mock.json";

export default {
  title: "InfoCard"
};

export const __DefaultSlice = () => ({
  components: { InfoCard },
  data() {
    return {
      mock
    };
  },
  // eslint-disable-next-line
  template: "<InfoCard :slice=\"mock\" />"
});
