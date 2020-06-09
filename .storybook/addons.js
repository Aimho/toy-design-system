import "@storybook/addon-knobs/register";
import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "Creatable Design System",
  brandUrl: "/"
});

addons.setConfig({
  theme: theme,
  showPanel: false,
  panelPosition: "right"
});
