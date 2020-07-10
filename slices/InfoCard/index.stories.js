import {
  withKnobs,
  text,
  boolean,
  color,
  select
} from "@storybook/addon-knobs";
import cloneDeep from "lodash/cloneDeep";

import InfoCard from "./";
import mock from "./mock.json";

export default {
  title: "Slices . Info Card",
  decorators: [withKnobs]
};

export const __Basic = () => ({
  components: { InfoCard },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.primary.text[0].text = text("Text", _mock.primary.text[0].text);
        _mock.primary.image.url = text("Image", _mock.primary.image.url);
        _mock.primary.text_color = color(
          "Text color",
          _mock.primary.text_color
        );
        _mock.primary.background_color = color(
          "Background color",
          _mock.primary.background_color
        );
        _mock.primary.background_shape = select(
          "Background shape",
          ["Shape 1", "Shape 2", "Shape 3"],
          "Shape 1"
        );
        _mock.slice_label = boolean("Inverted?", false) ? "inverted" : null;

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<info-card :slice=\"mock\" />"
});
__Basic.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};

export const __Inverted = () => ({
  components: { InfoCard },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.primary.text[0].text = text("Text", _mock.primary.text[0].text);
        _mock.primary.image.url = text("Image", _mock.primary.image.url);
        _mock.primary.text_color = color(
          "Text color",
          _mock.primary.text_color
        );
        _mock.primary.background_color = color(
          "Background color",
          _mock.primary.background_color
        );
        _mock.primary.background_shape = select(
          "Background shape",
          ["Shape 1", "Shape 2", "Shape 3"],
          "Shape 1"
        );
        _mock.slice_label = boolean("Inverted?", true) ? "inverted" : null;

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<info-card :slice=\"mock\" />"
});
__Inverted.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};
