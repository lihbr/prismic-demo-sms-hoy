import * as fs from "fs";
import { libraries } from "@slicemachine/core";

fs.writeFileSync(
  ".slicemachine/slice-canvas-state.json",
  JSON.stringify(libraries(process.cwd(), ["@/hoy-slices/slices"]))
);
