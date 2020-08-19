import { withKnobs, text } from "@storybook/addon-knobs";
import cloneDeep from "lodash/cloneDeep";

import BriefLetter from "./";
import mock from "./mock.json";

export default {
  title: "Slices/Brief Letter",
  decorators: [withKnobs]
};

export const __Basic = () => ({
  components: { BriefLetter },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.text = text(
          "Text",
          _mock.primary.text
            .filter(i => i.type === "paragraph")
            .map(i => i.text)
            .join("\n")
        )
          .split("\n")
          .filter(i => !!i.trim())
          .map(i => ({ type: "paragraph", text: i, spans: [] }));

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<brief-letter :slice=\"mock\" />"
});
__Basic.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};
