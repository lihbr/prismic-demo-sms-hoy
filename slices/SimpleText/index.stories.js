import SimpleText from "./";
import mock from "./mock.json";

export default {
  title: "SimpleText"
};

export const __DefaultSlice = () => ({
  components: { SimpleText },
  data() {
    return {
      mock
    };
  },
  // eslint-disable-next-line
  template: "<SimpleText :slice=\"mock\" />"
});
