import { withKnobs, text } from "@storybook/addon-knobs";
import cloneDeep from "lodash/cloneDeep";

import NewsletterForm from "./";
import mock from "./mock.json";

export default {
  title: "Slices/Newsletter Form",
  decorators: [withKnobs]
};

export const __Basic = () => ({
  components: { NewsletterForm },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.input_placeholder = text(
          "Input placeholder",
          _mock.primary.input_placeholder
        );
        _mock.primary.subscribe_label = text(
          "Subscribe label",
          _mock.primary.subscribe_label
        );
        _mock.primary.form_action = text(
          "Form action",
          _mock.primary.form_action
        );
        _mock.primary.honey_pot = text("Honey pot ID", _mock.primary.honey_pot);

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<NewsletterForm :slice=\"mock\" />"
});
__Basic.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};
