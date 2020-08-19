import { withKnobs, select } from "@storybook/addon-knobs";
import cloneDeep from "lodash/cloneDeep";

import SimpleSpacer from "./";
import mock from "./mock.json";

export default {
  title: "Slices/Simple Spacer",
  decorators: [withKnobs]
};

export const __Basic = () => ({
  components: { SimpleSpacer },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.size = select(
          "Space size",
          ["Small", "Medium", "Large"],
          _mock.primary.size
        );

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<SimpleSpacer :slice=\"mock\" :style=\"{ background: '#fff5ca' }\" />"
});
