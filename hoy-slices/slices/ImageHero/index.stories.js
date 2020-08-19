import { withKnobs, text, array } from "@storybook/addon-knobs";
import cloneDeep from "lodash/cloneDeep";

import ImageHero from "./";
import mock from "./mock.json";

export default {
  title: "Slices/Image Hero",
  decorators: [withKnobs]
};

export const __Basic = () => ({
  components: { ImageHero },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.primary.text[0].text = text("Text", _mock.primary.text[0].text);

        const items = array(
          "CTA",
          _mock.items.map(i => i.title)
        );
        _mock.items = items.map(title => ({
          link: {
            link_type: "Web",
            url: "https://google.com",
            target: "_blank"
          },
          title
        }));

        _mock.primary.image.url = text("Image", _mock.primary.image.url);
        _mock.primary.background.url = text(
          "Background",
          _mock.primary.background.url
        );

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<image-hero :slice=\"mock\" />"
});
__Basic.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};

export const __WithoutCTA = () => ({
  components: { ImageHero },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.primary.text[0].text = text("Text", _mock.primary.text[0].text);

        const items = array("CTA", []);
        _mock.items = items.map(title => ({
          link: {
            link_type: "Web",
            url: "https://google.com",
            target: "_blank"
          },
          title
        }));

        _mock.primary.image.url = text("Image", _mock.primary.image.url);
        _mock.primary.background.url = text(
          "Background",
          _mock.primary.background.url
        );

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<image-hero :slice=\"mock\" />"
});
__WithoutCTA.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};
