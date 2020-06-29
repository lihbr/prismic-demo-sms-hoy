import TextImage from "./";
import mock from "./mock.json";

export default {
  title: "TextImage"
};

export const __DefaultSlice = () => ({
  components: { TextImage },
  data() {
    return {
      mock
    };
  },
  // eslint-disable-next-line
  template: "<TextImage :slice=\"mock\" />"
});
