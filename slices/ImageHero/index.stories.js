import ImageHero from "./";
import mock from "./mock.json";

export default {
  title: "ImageHero"
};

export const __DefaultSlice = () => ({
  components: { ImageHero },
  data() {
    return {
      mock
    };
  },
  // eslint-disable-next-line
  template: "<ImageHero :slice=\"mock\" />"
});
