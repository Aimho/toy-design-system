import { ColorSet } from "../../utils/theme";
import { TBaseComponent } from "../../utils/types";

export interface IChipProps extends TBaseComponent {
  /** The content of the label */
  label?: React.ReactNode;
  /** The labelColor of the component */
  labelColor?: ColorSet | "inherit";
  /** The backgroundColor of the component */
  backgroundColor?: ColorSet | "inherit";
  /** The borderRadius of the component */
  borderRadius?: number;
  /** The use Variant */
  variant?: "default" | "outlined";
}
