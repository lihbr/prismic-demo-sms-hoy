import { withKnobs, text } from "@storybook/addon-knobs";
import cloneDeep from "lodash/cloneDeep";

import SimpleText from "./";
import mock from "./mock.json";

export default {
  title: "Slices . Simple Text",
  decorators: [withKnobs]
};

export const __Basic = () => ({
  components: { SimpleText },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.primary.text[0].text = text("Text", _mock.primary.text[0].text);

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<simple-text :slice=\"mock\" />"
});

export const __NoTitle = () => ({
  components: { SimpleText },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.title[0].text = text("Title", "");
        _mock.primary.text[0].text = text("Text", _mock.primary.text[0].text);

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<simple-text :slice=\"mock\" />"
});
